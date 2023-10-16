import { FC, PropsWithChildren } from 'react';

import { Categories, Header } from '.';

interface LayoutProps {}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <div className="container max-w-screen-lg px-4 mt-4 mx-auto font-primary overflow-hidden">
      <Header />
      <Categories />
      {children}
    </div>
  );
};
