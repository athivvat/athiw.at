import React from 'react'
import Reset from './reset'
import Root from './root'
import Typography from './typography'

const Layout: React.FC = ({ children }) => {

  return (
    <>
      <Reset />
      <Root />
      <Typography />
      { children }
    </>
  )
}

export { Layout }
