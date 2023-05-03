import './Nav.css'
import React from 'react'
import {IoHomeOutline} from 'react-icons/io5'
import {IoSearchOutline} from 'react-icons/io5'
import {IoAddCircleOutline} from 'react-icons/io5'
import { IoPlayForwardOutline } from 'react-icons/io5'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='main-nav'>
      <ul>
        <li><Link to="/"><IoHomeOutline /></Link></li>
        <li><Link to="/search"><IoSearchOutline /></Link></li>
        <li><Link to="/post"><IoAddCircleOutline /></Link></li>
        <li><Link><IoPlayForwardOutline /></Link></li>
        <li><Link to="/profile"><IoPersonCircleOutline /></Link></li>
      </ul>
    </nav>
  )
}

export default Nav
