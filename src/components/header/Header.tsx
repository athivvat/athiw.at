import { IconContext } from 'react-icons';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';

const Header = () => {
  return (
    <div className="flex justify-between py-4">
      <a href="/" className="uppercase text-black font-medium tracking-wider">
        Athiwat
      </a>
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
      <div className="flex space-x-3">
        <a
          href="https://instagram.com/athivvat"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors text-gray-900 hover:text-gray-500 cursor-pointer"
        >
          <IconContext.Provider value={{ size: '1.4rem' }}>
            <AiOutlineInstagram />
          </IconContext.Provider>
        </a>
        <a
          href="https://twitter.com/athivvat"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors text-gray-900 hover:text-gray-500 cursor-pointer"
        >
          <IconContext.Provider value={{ size: '1.4rem' }}>
            <AiOutlineTwitter />
          </IconContext.Provider>
        </a>
        <a
          href="https://github.com/athivvat"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors text-gray-900 hover:text-gray-500 cursor-pointer"
        >
          <IconContext.Provider value={{ size: '1.4rem' }}>
            <AiOutlineGithub />
          </IconContext.Provider>
        </a>
        <a
          href="https://www.linkedin.com/in/athivvat/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors text-gray-900 hover:text-gray-500 cursor-pointer"
        >
          <IconContext.Provider value={{ size: '1.4rem' }}>
            <AiFillLinkedin />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
};

export default Header;
