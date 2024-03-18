import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

function NewsNavbar() {
  return (
    <div className='NewsNavbar px-5'>
        <div className="firstnav flex text-3xl justify-between py-8 px-3 ">

            <h1>PSMNEPALOGO</h1>
            <a>Date</a>
            
        </div>
        <div className="secondnav bg-blue-500 text-white py-3 flex justify-between px-5">
            <div className="nav-item space-x-1 font-bold sm:text-xl md:space-x-4 sm:pl-10">
            <a href='#'>होमपेज </a>
            <a href='#'>समाचार </a>
            <a href='#'>साहित्य </a>
            <a href='#'>विचार </a>
            <a href='#'>अन्य  </a>
            </div>
            <div className="item-icon hidden  sm:flex justify-center gap-5 text-xl  ">
                <FaFacebook/>
                <FaYoutube/>
                <FaXTwitter/>
            </div>
            <div className="register-text justify-center">
                <menu className='md:hidden'><TiThMenu/></menu>
                <h1 className='hidden md:block font-medium text-xl'>Log in </h1>
            </div>
        </div>
        
         
    </div>
  )
}

export default NewsNavbar
