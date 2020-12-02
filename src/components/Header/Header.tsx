import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box'

const Background = styled(Box)`
  background-size: 1.73em 1.73em;
  background-image: -webkit-repeating-radial-gradient(
    top center,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 1px,
    transparent 0,
    transparent 100%
  );
  background-repeat: repeat;
  background-position: center top 0.86em;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 20%;
    z-index: 0;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`

const Header: React.FC = () => {
  return (
    <Background>
      ATHIWAT
    </Background>
  )
}

export { Header }
