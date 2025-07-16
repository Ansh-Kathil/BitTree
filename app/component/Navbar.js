"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const showNavbar = ["/", ,"/stats", "/faq" , "/about",  "/generate"].includes(pathname)
    const [text, settext] = useState("")
    const searchuser = () => {
      router.push(`/${text}`)
      
    }
    
 
    return (<> {showNavbar && <nav className='bg-white justify-between w-[80vw] flex fixed  top-10 right-[10vw] rounded-full px-7 py-5'>
        <div className="logo flex gap-10 items-center">
            <Link href={"/"}><img className='h-6' src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" />
            </Link>
            <ul className='flex gap-10 '>
                <Link href="/stats" ><li>Our Stats  </li></Link>
                <Link href="/about" ><li>About us </li></Link>
                <Link href="/faq" ><li>FAQs </li></Link>
                
            </ul>
        </div>
        <div className='flex justify-center items-center text-center bg-gray-200 rounded-full p-2'>
            <input onChange={(e)=>settext(e.target.value)} value={text} className='focus:outline-none' type="search" name="" id="" placeholder='Enter Your handle' />
            <svg onClick={()=>searchuser()}  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
        </div>
       
    </nav>}
    </>
    )
}

export default Navbar
