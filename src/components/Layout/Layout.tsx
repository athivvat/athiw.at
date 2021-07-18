import React from 'react';
import { Header } from '../header';
import Reset from './reset';
import Root from './root';
import Typography from './typography';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Reset />
      <Root />
      <Typography />
      <Header />
      <div>{children}</div>
    </>
  );
};

export { Layout };
