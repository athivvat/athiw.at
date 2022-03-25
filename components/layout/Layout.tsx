import React from 'react';
import { Header } from '../header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0e0c0b] antialiased selection:bg-rose-600/90 selection:text-white">
      <div className="relative z-10 mx-auto w-full sm:max-w-screen-sm">
        <div className="relative">
          <span className="pointer-events-none absolute top-[-60vw] left-0 right-0 bottom-[-6vw] z-[-1] bg-gradient-to-r from-rose-400/20 via-fuchsia-500/20 to-indigo-500/20 blur-3xl filter sm:top-[-6vw] sm:right-[-7vw] sm:left-[-7vw]"></span>
        </div>
      </div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
