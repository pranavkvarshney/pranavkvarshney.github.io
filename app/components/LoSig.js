import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
const LoSig = () => {
    const router = useRouter()
    const register = () => {
        router.push("/register")
    }
    const login = () => {
        router.push("/login")
    }
    return (
        <>
            <li>
                <button onClick={login} type="button" className="m-2 text-white bg-gradient-to-br from-green-400 font-bold to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200   rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Login</button>
            </li>
            <li>
                <button onClick={register} type="button" className=" m-2 text-white bg-gradient-to-br from-green-400 font-bold to-blue-600 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200   rounded-lg  px-5 py-2.5 text-center me-2 mb-2">Register</button>
            </li>
        </>
    )
}

export default LoSig
