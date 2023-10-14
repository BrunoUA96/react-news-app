import { FC, PropsWithChildren, useState } from 'react';

import { Categories, Header } from '.';

interface LayoutProps {}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="container max-w-screen-lg px-4 mt-4 mx-auto font-primary overflow-hidden">
      <Header />
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {children}
    </div>
  );
};
