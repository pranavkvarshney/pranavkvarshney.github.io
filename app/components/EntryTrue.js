"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
const EntryTrue = ({ userId }) => {
    const router = useRouter()
    const gate = () => {
        router.push(`/user/${userId}`)
    }

    return (
        <>
            <center>
                <button onClick={() => { gate() }} className="bg-gray-300 my-1 hover:bg-gray-300 hover:ring-4 outline-none hover:ring-gray-300  text-gray-500 font-bold  border-b-4 py-1 px-2 border-gray-400 hover:border-gray-500 rounded"><Image className='inline mx-1 '
                    src="/person1.svg"
                    alt='img'
                    width={22}
                    height={22}
                    priority
                />
                    GatePass
                </button></center>
        </>
    )
}

export default EntryTrue