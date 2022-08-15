import React from 'react'
import Navbar from './Navbar';
import '../styles/global.css';

const Layout = ({children}) => {
  return (
    <div className='Layout__Container'>
        <Navbar />
        <div className="content">
            {children}
        </div>
        <footer>
            <p>Copyright 2022 Semi Colon</p>
        </footer>
    </div>
  )
}

export default Layout