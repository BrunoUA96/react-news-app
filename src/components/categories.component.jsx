import { useState } from 'react';

export const Categories = () => {
   const categoryList = ['World', 'Sport', 'Tech', 'Poliics'];

   const [activeCategory, setActiveCategory] = useState(0);

   return (
      <div className="flex gap-2 my-3 border-b pb-3">
         {categoryList.map((category, index) => (
            <span
               key={index}
               className={`rounded-full cursor-pointer px-3 py-1 text-base font-normal ease-in-out duration-300 ${
                  index == activeCategory
                     ? 'bg-violet-100 hover:bg-violet-300 text-violet-600 hover:text-violet-700'
                     : 'bg-gray-100 hover:bg-gray-300  text-gray-600 hover:text-gray-700'
               }`}
               onClick={() => setActiveCategory(index)}
            >
               {category}
            </span>
         ))}
      </div>
   );
};
