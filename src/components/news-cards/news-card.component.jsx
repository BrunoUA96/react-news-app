export const NewsCart = () => {
   return (
      <>
         <div className="grid grid-cols-12 gap-10 cursor-pointer group mb-5">
            {/* Image */}
            <div className="flex-shrink-0 col-span-3 overflow-hidden">
               <img
                  className="object-cover w-full max-h-52 group-hover:scale-125 ease-in-out duration-300"
                  src={
                     'https://i.guim.co.uk/img/media/55b58f9514a6ccb5a57d59d04151af12864acf69/0_374_5616_3370/master/5616.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=416add2213cc99b0e4b11206ea66407b'
                  }
                  alt="News image"
               />
            </div>

            <div className="flex flex-col justify-between col-span-9">
               <div className="text-sm text-gray-400 font-light group-hover:text-yellow-600 ease-in-out duration-300">
                  <span>2h ago</span>
               </div>
               <h5 className="text-xl text-gray-700 group-hover:text-gray-800 ease-in-out duration-300 font-bold tracking-wider font-title mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo omnis eligendi
                  obcaecati.
               </h5>
               <p className="line-clamp-3 text-gray-500 mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga in laborum libero
                  fugiat beatae, mollitia dicta dolor ipsum, facere, vero consequuntur minus nam
                  sunt corporis perspiciatis voluptatem aliquam excepturi iste?
               </p>
               <div className="text-sm text-gray-400 font-light group-hover:text-yellow-600 ease-in-out duration-300">
                  <span>by Isabella Kwai</span>
               </div>
            </div>
         </div>
      </>
   );
};
