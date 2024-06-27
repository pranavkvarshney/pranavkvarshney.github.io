"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import EntryTrue from '@/app/components/EntryTrue'
async function getallUsers() {
    let response = await fetch("http://localhost:3000/api/users", {
        cache: 'no-store',
        method: 'GET'
    })
    response = await response.json()
    return response
}


const page = async () => {
    const router = useRouter()
    const alldata = await getallUsers()
    const gate = (e) => {
        router.push(`/user/${e}`)
    }
    const view = (e) => {
        router.push(`/edit/${e}`)
    }
    if (alldata.success) {
        const users = alldata.data
        return (
            <>
                <div className="py-20 ">
                    <div className="container w-[90%] h-fit mx-auto p-2 overflow-auto">


                        <table className="w-full text-sm text-left rtl:text-right   ">
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
                                    <th>Sl.No</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                    <th>Address</th>
                                    <th>Type</th>
                                    <th>Purpose</th>
                                    <th>Company Name</th>
                                    <th>Company Address</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.company}</td>
                                        <td>{user.address}</td>
                                        <td>{user.type}</td>
                                        <td>{user.purpose}</td>
                                        <td>{user.compname}</td>
                                        <td>{user.compadd}</td>
                                        <td>{user.entry === true ? "Permitted" : user.entry === false ? "Denied" : "Pending..."}</td>


                                        <td>
                                            <center>
                                                {user.entry ? <EntryTrue userId={user._id} /> : ""}

                                                {/* <button onClick={() => { gate(user._id) }} className="bg-gray-300 my-1 hover:bg-gray-300 hover:ring-4 outline-none hover:ring-gray-300  text-gray-500 font-bold  border-b-4 py-1 px-2 border-gray-400 hover:border-gray-500 rounded"><Image className='inline mx-1 '
                                                    src="/person1.svg"
                                                    alt='img'
                                                    width={22}
                                                    height={22}
                                                    priority
                                                />
                                                    GatePass
                                                </button> */}
                                            </center>
                                            <center>
                                                <button onClick={() => { view(user._id) }} className="bg-blue-300 my-1 hover:bg-blue-300 hover:ring-4 outline-none hover:ring-blue-300  text-blue-500 font-bold  border-b-4 py-1 px-6 border-blue-400 hover:border-blue-500 rounded"><Image className='inline mx-1 '
                                                    src="/edit.svg"
                                                    alt='img'
                                                    width={22}
                                                    height={22}
                                                    priority
                                                />
                                                    <div className='inline mx-0.5'></div> Edit
                                                </button> </center></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div >
                </div >
            </>
        )
    } else {
        return <>
            <section className="container w-[50%] mx-auto pt-16">

                <div className="container rounded-lg text-center absolute w-[50%] bg-red-200 mt-10 py-16">
                    <Image className='inline'
                        src="/danger.svg"
                        alt='img'
                        width={30}
                        height={30}
                        priority
                    />{alldata.message}
                </div>

            </section >
        </>
    }

}

export default page
