import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/slices/categoriesSlice';

export const Categories = ({ activeCategory, setActiveCategory }) => {
   const dispatch = useDispatch();

   const { categories } = useSelector((state) => state.categories);

   useEffect(() => {
      dispatch(fetchCategories());
   }, []);

   const onChangeCategory = (category) => {
      setActiveCategory(category);
   };

   return (
      <div className="flex gap-2 my-3 border-b pb-3 overflow-x-scroll">
         <span
            className={`rounded-full cursor-pointer px-3 py-1 text-base font-normal ease-in-out duration-300 ${
               activeCategory == 'All'
                  ? 'bg-violet-100 hover:bg-violet-300 text-violet-600 hover:text-violet-700'
                  : 'bg-gray-100 hover:bg-gray-300  text-gray-600 hover:text-gray-700'
            }`}
            onClick={() => onChangeCategory('All')}
         >
            All
         </span>
         {categories.map((category) => (
            <span
               key={category}
               className={`rounded-full cursor-pointer px-3 py-1 text-base font-normal ease-in-out duration-300 ${
                  category == activeCategory
                     ? 'bg-violet-100 hover:bg-violet-300 text-violet-600 hover:text-violet-700'
                     : 'bg-gray-100 hover:bg-gray-300  text-gray-600 hover:text-gray-700'
               }`}
               onClick={() => onChangeCategory(category)}
            >
               {category}
            </span>
         ))}
      </div>
   );
};
