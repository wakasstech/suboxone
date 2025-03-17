import React from 'react'
import Routing from "../routing/Routers"
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <>
     <Navbar />
      <Routing/>
      <Footer />
    </>
  )
}

export default Layout