import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useLazyGetNewsQuery } from '@/api/getAPI';
import {
  Layout,
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
  const activeRegion = useSelector(selectedRegion);
  const activeCategory = useSelector(selectedCategory);

  const [trigger, { data, error, isFetching }] = useLazyGetNewsQuery();

  const [activePage, setActivePage] = useState(1);
  // const [itemsPerPage, _] = useState(10);
  const itemsPerPage = 10;

  useEffect(() => {
    const params = JSON.stringify({
      category: activeCategory,
      page_number: activePage,
      page_size: itemsPerPage,
      country: activeRegion,
    });

    trigger(params);
  }, [activeCategory, activePage, itemsPerPage, activeRegion, trigger]);

  if (error) return <h1>Upppsss...</h1>;

  if (isFetching) {
    return (
      <Layout>
        <div className="grid grid-cols-12 gap-10 mb-12 border-b pb-5">
          <div className="col-span-8">
            <Skeleton width={648} height={556} />
          </div>

          <div className="flex flex-col gap-3 col-span-4">
            <Skeleton width={304} height={243} />
            <Skeleton width={304} height={243} />
          </div>
        </div>
      </Layout>
    );
  }

  if (data?.news) {
    return (
      <Layout>
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
                news={data.news[0]}
              />
            </div>

            <div className="flex flex-col gap-3 col-span-4">
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
        </>

        <Pagination activePage={activePage} setActivePage={setActivePage} />
      </Layout>
    );
  }
};
