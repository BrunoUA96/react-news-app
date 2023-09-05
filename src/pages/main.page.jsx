import { Categories } from '../components/categories.component';
import { Header } from '../components/header.component';
import { NewsCart } from '../components/news/news-cart.component';

export const Main = () => {
   return (
      <div className="container px-4 mt-4 mx-auto font-primary">
         <Header />
         <Categories />

         <div className="grid grid-cols-2">
            <NewsCart isBanner />
         </div>

         <NewsCart />
         <NewsCart />
         <NewsCart />
         <NewsCart />
      </div>
   );
};
