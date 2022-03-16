import React from 'react';
import { Header } from '../header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
