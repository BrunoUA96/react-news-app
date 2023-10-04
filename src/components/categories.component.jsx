import { motion } from 'framer-motion';
import { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories } from '../redux/slices/categoriesSlice';

const categoryAnimation = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.09 }
  })
};

export const Categories = ({ activeCategory, setActiveCategory }) => {
  const dispatch = useDispatch();

  const { categories } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const onChangeCategory = category => {
    setActiveCategory(category);
  };

  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      className="flex gap-2 my-3 border-b pb-3 overflow-x-scroll"
    >
      <MotionCategoryItem
        custom={1}
        variants={categoryAnimation}
        category={'All'}
        activeCategory={activeCategory}
        onChangeCategory={onChangeCategory}
      />

      {categories.map((category, index) => (
        <MotionCategoryItem
          key={category}
          custom={index + 1}
          variants={categoryAnimation}
          category={category}
          activeCategory={activeCategory}
          onChangeCategory={onChangeCategory}
        />
      ))}
    </motion.ul>
  );
};

// Category Item
const CategoryItem = forwardRef(
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
  )
);

CategoryItem.displayName = 'categoryItem';

// Category Item to Motion component to animation works
const MotionCategoryItem = motion(CategoryItem);
