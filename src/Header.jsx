import './Header.css'
import React from 'react'
import { IoHeart } from 'react-icons/io5'
import { AiOutlineMessage } from 'react-icons/ai'


function Header() {
    return (
        <div className="header">
        <h1>Seanstagram</h1>
        <div className="header-right">
            <a className="active" href="#home"><IoHeart /></a>
            <a href="#contact"><AiOutlineMessage /></a>
        </div>
        </div>
    )
    }

export default Header