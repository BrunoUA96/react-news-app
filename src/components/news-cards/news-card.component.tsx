import { FC } from 'react';

import { newsInterface } from '@/api/getAPI';
import { usePublishedTime } from '@/helpers/useFormatedData';
import { motion } from 'framer-motion';

import { newsCardAnimation } from './motionCardAnimation';

interface NewsCardProps {
  news: newsInterface;
  viewPortIndex: number;
}

export const NewsCard: FC<NewsCardProps> = ({ news, viewPortIndex }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="w-full"
    >
      <motion.div
        custom={viewPortIndex}
        variants={newsCardAnimation}
        className="grid grid-cols-2 md:grid-cols-12 gap-10 cursor-pointer group mb-5"
      >
        {/* Image */}
        <div className="flex-shrink-0 col-span-2 md:col-span-3 overflow-hidden">
          <img
            className="object-cover w-full max-h-52 group-hover:scale-125 ease-in-out duration-300"
            src={news.image}
            alt="News image"
          />
        </div>

        <div className="flex flex-col justify-between col-span-2 md:col-span-9">
          <div className="text-sm text-gray-400 font-light group-hover:text-yellow-600 ease-in-out duration-300">
            <span>{usePublishedTime(news.published)}</span>
          </div>
          <h5 className="text-xl text-gray-700 group-hover:text-gray-800 ease-in-out duration-300 font-bold tracking-wider font-title mb-3">
            {news.title}
          </h5>
          <p className="line-clamp-3 text-gray-500 mb-3">{news.description}</p>
          <div className="text-sm text-gray-400 font-light group-hover:text-yellow-600 ease-in-out duration-300">
            <span>by {news.author}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
