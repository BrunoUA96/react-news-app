import { FC, forwardRef } from 'react';
import { useSelector } from 'react-redux';

import { useGetCategoriesQuery } from '@/api/getAPI';
import {
  selectedCategory,
  setActiveCategory,
} from '@/redux/slices/categorySlice';
import { useAppDispatch } from '@/redux/store';
import { motion } from 'framer-motion';

const categoryAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.09 },
  }),
};

interface CategoriesProps {}

export const Categories: FC<CategoriesProps> = () => {
  const dispatch = useAppDispatch();

  const activeCategory = useSelector(selectedCategory);

  const { data, error, isLoading } = useGetCategoriesQuery(
    'available/categories',
  );

  const onChangeCategory = (category: string) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      className="flex gap-2 my-3 border-b pb-3 overflow-x-scroll"
    >
      {isLoading ? (
        <div>Is Loading...</div>
      ) : error ? (
        <div>No categories available</div>
      ) : (
        <>
          <MotionCategoryItem
            custom={1}
            variants={categoryAnimation}
            category={'All'}
            activeCategory={activeCategory}
            onChangeCategory={onChangeCategory}
          />

          {data?.categories.map((category, index) => (
            <MotionCategoryItem
              key={category}
              custom={index + 1}
              variants={categoryAnimation}
              category={category}
              activeCategory={activeCategory}
              onChangeCategory={onChangeCategory}
            />
          ))}
        </>
      )}
    </motion.ul>
  );
};

interface CategoryItemInterface {
  category: string;
  activeCategory: string;
  onChangeCategory: (category: string) => void;
}

// Category Item
const CategoryItem = forwardRef<HTMLLIElement, CategoryItemInterface>(
  ({ category, activeCategory, onChangeCategory }, ref) => (
    <li ref={ref}>
      <button
        className={`rounded-full inline-block cursor-pointer px-3 py-1 text-base font-normal ease-in-out duration-300 ${
          category == activeCategory
            ? 'bg-violet-100 hover:bg-violet-300 text-violet-600 hover:text-violet-700'
            : 'bg-gray-100 hover:bg-gray-300  text-gray-600 hover:text-gray-700'
        }`}
        onClick={() => onChangeCategory(category)}
      >
        {category}
      </button>
    </li>
  ),
);

CategoryItem.displayName = 'categoryItem';

// Category Item to Motion component to animation works
const MotionCategoryItem = motion(CategoryItem);
