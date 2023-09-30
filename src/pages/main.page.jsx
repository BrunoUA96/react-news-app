import { useEffect, useState } from 'react';
import { Categories } from '../components/categories.component';
import { Header } from '../components/header.component';
import { BannerCard } from '../components/news-cards/banner-card.component';
import { NewsCart } from '../components/news-cards/news-card.component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/slices/newsSlice';
import { Skeleton } from '../components/news-cards/skeleton.component';
import { Pagination } from '../components/pagination.component';

export const Main = () => {
   const dispatch = useDispatch();
   const { news, status } = useSelector((state) => state.news);

   const [activeCategory, setActiveCategory] = useState('All');
   const [activePage, setActivePage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(10);

   // Banner news
   const [first, second, third] = news.slice(0, 3);

   useEffect(() => {
      const params = { category: activeCategory, page_number: activePage, page_size: itemsPerPage };

      dispatch(fetchNews(params));
   }, [activeCategory, activePage]);

   return (
      <div className="container max-w-screen-lg px-4 mt-4 mx-auto font-primary">
         <Header />
         <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

         {status === 'loading' ? (
            <div className="grid grid-cols-12 gap-10 mb-12 border-b pb-5">
               <div className="col-span-8">
                  <Skeleton width={648} height={556} />
               </div>

               <div className="flex flex-col gap-3 col-span-4">
                  <Skeleton width={304} height={243} />
                  <Skeleton width={304} height={243} />
               </div>
            </div>
         ) : (
            <>
               <div className="grid grid-cols-12 gap-10 mb-12 border-b pb-5">
                  <div className="col-span-8">
                     <BannerCard isPrincipal news={first} />
                  </div>

                  <div className="flex flex-col gap-3 col-span-4">
                     <BannerCard news={second} />
                     <BannerCard news={third} />
                  </div>
               </div>

               {news.slice(3).map((newsItem) => (
                  <NewsCart key={newsItem.id} news={newsItem} />
               ))}
            </>
         )}

         <Pagination activePage={activePage} setActivePage={setActivePage} />
      </div>
   );
};
