import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Categories,
  Header,
  MotionBannerCard,
  NewsCard,
  Pagination,
  Skeleton,
  newsCardAnimation,
} from '@/components';
import { fetchNews } from '@/redux/slices/newsSlice';
import { selectRegions } from '@/redux/slices/regionsSlice';
import { RootState, useAppDispatch } from '@/redux/store';
import { motion } from 'framer-motion';

export const Main = () => {
  const dispatch = useAppDispatch();
  const { news, status } = useSelector((state: RootState) => state.news);
  const { activeRegion } = useSelector(selectRegions);

  const [activeCategory, setActiveCategory] = useState('All');
  const [activePage, setActivePage] = useState(1);
  // const [itemsPerPage, _] = useState(10);
  const itemsPerPage = 10;

  // Banner news
  const [first, second, third] = news.slice(0, 3);

  useEffect(() => {
    const params = {
      category: activeCategory,
      page_number: activePage,
      page_size: itemsPerPage,
      // Check if region exist in list
      country: activeRegion,
    };

    dispatch(fetchNews(params));
  }, [activeCategory, activePage, activeRegion, dispatch]);

  return (
    <div className="container max-w-screen-lg px-4 mt-4 mx-auto font-primary overflow-hidden">
      <Header />
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-10 mb-12 border-b pb-5"
          >
            <div className="col-span-8">
              <MotionBannerCard
                custom={1}
                variants={newsCardAnimation}
                isPrincipal
                news={first}
              />
            </div>

            <div className="flex flex-col gap-3 col-span-4">
              <MotionBannerCard
                custom={2}
                variants={newsCardAnimation}
                news={second}
              />
              <MotionBannerCard
                custom={3}
                variants={newsCardAnimation}
                news={third}
              />
            </div>
          </motion.div>
          <div className="flex flex-col">
            {news.slice(3).map((newsItem, index) => (
              <NewsCard
                viewPortIndex={index + 1}
                key={newsItem.id}
                news={newsItem}
              />
            ))}
          </div>
        </>
      )}

      <Pagination activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
};
