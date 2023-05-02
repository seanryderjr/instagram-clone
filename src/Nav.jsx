import './Nav.css'
import React from 'react'
import {IoHomeOutline} from 'react-icons/io5'
import {IoSearchOutline} from 'react-icons/io5'
import {IoAddCircleOutline} from 'react-icons/io5'
import { IoPlayForwardOutline } from 'react-icons/io5'
import { IoPersonCircleOutline } from 'react-icons/io5'

function Nav() {
    
      return (
     <>
        <nav className='main-nav'>
          <ul>
             <li><a href="#"><IoHomeOutline /></a></li>
             <li><a href="#"><IoSearchOutline /></a></li>
             <li><a href="#"><IoAddCircleOutline /></a></li>
                <li><a href="#"><IoPlayForwardOutline /></a></li>
                <li><a href="#"><IoPersonCircleOutline /></a></li>

          </ul>
        </nav>
     </>
      )
    }


export default Nav