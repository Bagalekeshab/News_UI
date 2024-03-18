import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='mt-10 md:flex'>
        <div className='w-72 text-3xl py-5'><h1 className='text-center'>PSMNEPALLOGO</h1></div>
        <div className='md:flex justify-between px-4 py-5 bg-blue-500 text-white w-full'>
            <div>
                <h2 className='pl-5'>Poweredby:<b>Amar Sanchar Ghriha(P)Ltd.</b><br></br>
                Head Office:<br></br>
                Phone:<br></br>
                E-mail:........(for adv.)
                        .........(for news)
                        </h2>


            </div>
            <div className='pl-5 py-5'>
                <h3>Company Reg. No: <br></br>
                Information Department Registration No:<br></br>
                Press Council Reg. NO:</h3>
            </div>
            <div className='flex gap-5 py-5 text-2xl pl-10'>
                <FaFacebook/>
                <FaYoutube/>
                <FaXTwitter/>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
