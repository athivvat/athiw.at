import Link from 'next/link';
const Header = () => {
  return (
    <nav className="bg-midnight text-white">
      <div className="container flex items-center justify-between py-5">
        <Link href="/">
          <a className="font-medium">
            Athivvat
            <span className="text-white/50 font-normal">
              {' '}
              — Humanity need an upgrade
            </span>
          </a>
        </Link>
        <div className="uppercase text-[13px] space-x-8 tracking-wide">
          <Link href="/about">
            <a>About</a>
          </Link>
          <a
            href="https://thereader.co/u/athivvat"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Books
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
