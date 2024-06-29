"use client"
import React, { useEffect, useContext } from 'react'
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { useRouter } from 'next/navigation';
import { useLogin } from '@/app/components/contexts/LoginContext';

const Header = () => {
    const router = useRouter()
    const { isLoggedIn, setIsLoggedIn } = useLogin()

    const register = () => {
        router.push("/register")
    }
    const login = () => {
        router.push("/login")
    }
    const signOut = () => {
        setIsLoggedIn(false)
        router.push("/")
    }

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
            <nav className="fixed top-0 flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg z-10 bg-[#d3cdcd]">
                <div>
                    <a href="/"><Image width={250} height={200} src="/av.png" alt="image" priority /></a>
                </div>
                <button id="menu-button" className='h-10 w-10 cursor-pointer md:hidden relative hover:bg-slate-200 items-center justify-center p-2 mb-2 me-2 font-medium rounded-lg hover:ring-4 outline-none hover:ring-blue-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                    <ul className="pt-4 text-base md:flex md:justify-between md:pt-0">
                        <li>
                            <a className="text-blue-700 md:p-4 mx-3 py-2 text-2xl block hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-500 hover:text-transparent hover:bg-clip-text" href="/components/">Add New Visitor</a>
                        </li>
                        {!isLoggedIn ? (
                            <>
                                <li>
                                    <button onClick={login} type="button" className="m-2 text-white bg-gradient-to-br from-green-400 font-bold to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 rounded-lg px-5 py-2.5 text-center me-2 mb-2">Login</button>
                                </li>
                                <li>
                                    <button onClick={register} type="button" className="m-2 text-white bg-gradient-to-br from-green-400 font-bold to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 rounded-lg px-5 py-2.5 text-center me-2 mb-2">Register</button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <button onClick={signOut} type="button" className="m-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg px-5 py-2.5 text-center me-2 mb-2">Sign Out</button>
                            </li>
                        )}
                        <li>
                            <span className=""><ThemeToggle /></span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header