import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <Link className='logo' to="/">Victor Palha</Link>
    </header>
  )
}

export default Header