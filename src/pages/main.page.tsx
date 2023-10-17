import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetNewsQuery } from '@/api/getAPI';
import {
  MotionBannerCard,
  NewsCard,
  Pagination,
  Skeleton,
  newsCardAnimation,
} from '@/components';
import { selectedCategory } from '@/redux/slices/categorySlice';
import { selectedRegion } from '@/redux/slices/regionSlice';
import { motion } from 'framer-motion';

export const Main = () => {
  const activeCategory = useSelector(selectedCategory);
  const activeRegion = useSelector(selectedRegion);

  const filters = JSON.stringify([...activeCategory, ...activeRegion]);

  const [filterState, setFilterState] = useState(filters);

  useEffect(() => {
    setFilterState(filters);
  }, [filters]);

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  const params = JSON.stringify({
    category: activeCategory,
    page_number: activePage,
    page_size: itemsPerPage,
    country: activeRegion,
  });

  const { data, error, isFetching } = useGetNewsQuery(params);

  if (error) return <h1>Upppsss...</h1>;

  if (isFetching) {
    return (
      <div className="grid grid-cols-12 gap-10 mb-12 border-b pb-5">
        <div className="col-span-12 md:col-span-8">
          <Skeleton height={600} />
        </div>

        <div className="flex flex-row md:flex-col gap-3 col-span-12 md:col-span-4">
          <Skeleton height={280} />
          <Skeleton height={280} />
        </div>
      </div>
    );
  }

  if (data?.news && filterState === filters) {
    return (
      <>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-10 mb-12 border-b pb-5"
        >
          <div className="col-span-12 md:col-span-8">
            <MotionBannerCard
              custom={1}
              variants={newsCardAnimation}
              isPrincipal
              news={data.news[0]}
            />
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 col-span-12 md:col-span-4">
            <MotionBannerCard
              custom={2}
              variants={newsCardAnimation}
              news={data.news[1]}
            />
            <MotionBannerCard
              custom={3}
              variants={newsCardAnimation}
              news={data.news[2]}
            />
          </div>
        </motion.div>

        <div className="flex flex-col">
          {data.news.slice(3).map((newsItem, index) => (
            <NewsCard
              viewPortIndex={index + 1}
              key={newsItem.id}
              news={newsItem}
            />
          ))}
        </div>

        <Pagination activePage={activePage} setActivePage={setActivePage} />
      </>
    );
  }
};
