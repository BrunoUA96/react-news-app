import { forwardRef } from 'react';

import { motion } from 'framer-motion';

export const BannerCard = forwardRef(({ news, isPrincipal = false }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col cursor-pointer group ${
        isPrincipal ? 'gap-3' : 'gap-1'
      }`}
    >
      {/* Image */}
      <div className="flex-shrink-0 overflow-hidden">
        <img
          className={`object-cover w-full h-full group-hover:scale-125 ease-in-out duration-300 ${
            isPrincipal ? 'max-h-96' : 'max-h-36'
          }`}
          src={news.image}
          alt="News image"
        />
      </div>
      <div
        className={`flex justify-between text-gray-400 font-light group-hover:text-yellow-600 ease-in-out duration-300 ${
          isPrincipal ? 'text-sm' : 'text-xs'
        }`}
      >
        <span>2h ago</span>
        <span>by Isabella Kwai</span>
      </div>
      <h5
        className={`text-gray-700 group-hover:text-gray-800 ease-in-out duration-300 font-bold tracking-wider font-title ${
          isPrincipal ? 'text-2xl' : 'text-base line-clamp-2'
        } `}
      >
        {news.title}
      </h5>
      <p
        className={`line-clamp-3 text-gray-500 ${
          isPrincipal ? 'text-base' : 'text-sm'
        }`}
      >
        {news.description}
      </p>
    </div>
  );
});

BannerCard.displayName = 'BannerCard';

export const MotionBannerCard = motion(BannerCard);
