export const NewsCart = ({ isBanner = false }) => {
   return (
      <>
         <div className={`flex gap-3 cursor-pointer group ${isBanner ? 'flex-col mb-8' : 'mb-5'}`}>
            {/* Image */}
            <div className="flex-shrink-0">
               <img
                  className={`object-cover ${isBanner ? 'w-full max-h-52' : 'w-24 h-24'}`}
                  src={
                     'https://i.guim.co.uk/img/media/55b58f9514a6ccb5a57d59d04151af12864acf69/0_374_5616_3370/master/5616.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=416add2213cc99b0e4b11206ea66407b'
                  }
                  alt="News image"
               />
            </div>
            {/* Title */}
            <div className="flex flex-col justify-between">
               <h5 className="text-2xl text-gray-700 group-hover:text-gray-800 ease-in-out duration-300 font-bold tracking-wider font-title mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo omnis eligendi
                  obcaecati, recusandae dolores exercitationem sapiente ipsum minus.
               </h5>
               <p className="line-clamp-3 text-gray-500 mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga in laborum libero
                  fugiat beatae, mollitia dicta dolor ipsum, facere, vero consequuntur minus nam
                  sunt corporis perspiciatis voluptatem aliquam excepturi iste?
               </p>
               <div className="text-sm text-gray-400 font-light group-hover:text-yellow-600 ease-in-out duration-300">
                  <span>2h ago</span>
                  <span>by Isabella Kwai</span>
               </div>
            </div>
         </div>
      </>
   );
};
