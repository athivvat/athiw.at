import styled from 'styled-components';
import { Box } from '../box';

import githubIcon from './icons/logo-github.svg';
import twitterIcon from './icons/logo-twitter.svg';

const Social = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  @media (min-width: 769px) {
    grid-column: 1/12;
    justify-content: center;
  }
  a,
  img {
    width: 2rem;
    height: 2rem;
    max-width: 2rem;
    display: inline-block;
  }
  a {
    margin-right: 2em;
    transition: opacity 200ms ease-in-out;
    @media (min-width: 769px) {
      margin-right: 0;
      margin-left: 2em;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;

const Footer = () => {
  return (
    <div>
      <Social>
        <a href="https://github.com/athivvat" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Github" />
        </a>
        <a href="https://twitter.com/athivvat" target="_blank" rel="noreferrer">
          <img src={twitterIcon} alt="Github" />
        </a>
      </Social>
    </div>
  );
};

export { Footer };
