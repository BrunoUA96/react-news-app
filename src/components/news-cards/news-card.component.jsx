import { newsCardAnimation } from './motionCardAnimation';
import { motion } from 'framer-motion';

export const NewsCard = ({ news, viewPortIndex }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="w-full"
    >
      <Header />
      <motion.div
        order={viewPortIndex}
        custom={viewPortIndex}
        variants={newsCardAnimation}
        className="grid grid-cols-12 gap-10 cursor-pointer group mb-5"
      >
        {/* Image */}
        <div className="flex-shrink-0 col-span-3 overflow-hidden">
          <img
            className="object-cover w-full max-h-52 group-hover:scale-125 ease-in-out duration-300"
            src={news.image}
            alt="News image"
          />
        </div>

        <div className="flex flex-col justify-between col-span-9">
          <div className="text-sm text-gray-400 font-light group-hover:text-yellow-600 ease-in-out duration-300">
            <span>2h ago</span>
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
