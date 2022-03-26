import { Transition } from '@headlessui/react';
import Link from 'next/link';

export const Nav = () => {
  return (
    <Transition show={false}>
      <nav className="w-full text-white py-4 z-50">
        <div className="container flex items-center justify-between py-4 px-8">
          <Link href="/">
            <a className="font-medium">
              Athivvat
              <span className="text-white/50 font-normal pl-1.5">
                — Humanity need an upgrade
              </span>
            </a>
          </Link>
          <div className="hidden sm:flex uppercase text-[13px] space-x-8 tracking-wide">
            <Link href="/">
              <a className="opacity-80 hover:opacity-100">Articles</a>
            </Link>
            <Link href="/">
              <a className="opacity-80 hover:opacity-100">Books</a>
            </Link>
            <Link href="/">
              <a className="opacity-80 hover:opacity-100">Reports</a>
            </Link>
            <Link href="/">
              <a className="opacity-80 hover:opacity-100">Resume</a>
            </Link>
          </div>
        </div>
      </nav>
    </Transition>
  );
};
