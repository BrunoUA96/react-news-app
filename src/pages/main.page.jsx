import { Categories } from '../components/categories.component';
import { Header } from '../components/header.component';
import { BannerCard } from '../components/news-cards/banner-card.component';
import { NewsCart } from '../components/news-cards/news-card.component';

export const Main = () => {
   return (
      <div className="container max-w-screen-lg px-4 mt-4 mx-auto font-primary">
         <Header />
         <Categories />

         <div className="grid grid-cols-12 gap-10 mb-12 border-b pb-5">
            <div className="col-span-8">
               <BannerCard isPrincipal />
            </div>

            <div className="flex flex-col gap-3 col-span-4">
               <BannerCard />
               <BannerCard />
            </div>
         </div>

         <NewsCart />
         <NewsCart />
         <NewsCart />
         <NewsCart />
      </div>
   );
};
