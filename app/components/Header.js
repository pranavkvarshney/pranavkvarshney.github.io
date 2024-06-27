"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';


const Header = () => {
    useEffect(() => {
        const button = document.querySelector('#menu-button');
        const menu = document.querySelector('#menu');

        const toggleMenu = () => {
            menu.classList.toggle('hidden');
        };

        if (button && menu) {
            button.addEventListener('click', toggleMenu);
        }
        return () => {
            if (button) {
                button.removeEventListener('click', toggleMenu);
            }
        };
    }, []);
    return (
        <>

            <nav className="fixed top-0
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg  z-10
bg-[#d3cdcd]
        ">

                <div>
                    <a href="/"><Image width={250} height={200} src="/av.png" alt="image" priority /></a>
                </div>
                <button id="menu-button" className='h-10 w-10 cursor-pointer md:hidden relative hover:bg-slate-200  items-center justify-center p-2 mb-2 me-2   font-medium  rounded-lg hover:ring-4 outline-none hover:ring-blue-300 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg></button>


                <div className="hidden w-full md:flex md:items-center md:w-auto " id="menu">
                    <ul className="
              pt-4
              text-base 
              md:flex
              md:justify-between 
              md:pt-0">
                        <li>
                            <a className=" md:p-4 py-2 text-2xl block bg-gradient-to-r from-purple-500 to-pink-500  text-transparent bg-clip-text hover:text-blue-700" href="/components/">Add New Visitor</a>
                        </li>

                        <li>
                            <button type="button" class="btn m-2 text-white bg-gradient-to-r from-purple-500 to-pink-500  focus:ring-2 focus:outline-none  focus:ring-purple-500  rounded-lg  px-5 py-2.5 text-center ">Login</button>
                        </li>
                        <li>
                            <button type="button" class="btn m-2 text-white bg-gradient-to-r from-purple-500 to-pink-500  focus:ring-2 focus:outline-none   focus:ring-purple-500 rounded-lg  px-5 py-2.5 text-center me-2 mb-2">SignUp</button>
                        </li>
                        <li>
                            <span className=" "><ThemeToggle /></span>

                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
