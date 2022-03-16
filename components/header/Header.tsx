import Link from 'next/link';
const Header = () => {
  return (
    <div className="flex justify-between py-4">
      <Link href="/">
        <a className="uppercase text-black font-medium tracking-wider">
          Athiwat
        </a>
      </Link>

      <div className="uppercase text-sm">
        <a
          href="https://thereader.co/u/athivvat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-500"
        >
          Books
        </a>
      </div>
      <div className="flex space-x-3"></div>
    </div>
  );
};

export default Header;
