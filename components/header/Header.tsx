import Link from 'next/link';
const Header = () => {
  return (
    <nav className="text-white">
      <div className="container flex items-center justify-between py-5">
        <Link href="/">
          <a className="font-medium">
            Athivvat
            <span className="text-white/50 font-normal pl-1.5">
              — Humanity need an upgrade
            </span>
          </a>
        </Link>
        <div className="uppercase text-[13px] space-x-8 tracking-wide">
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Posts</a>
          </Link>
          <Link href="/">
            <a>Books</a>
          </Link>
          <Link href="/">
            <a>Resume</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
