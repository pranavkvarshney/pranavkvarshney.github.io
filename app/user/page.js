
import React from 'react'
import Image from 'next/image'
import Buttons from '@/app/components/Buttons'
async function getallUsers() {
    let response = await fetch("http://localhost:3000/api/users", {
        cache: 'no-store',
        method: 'GET'
    })
    response = await response.json()
    return response
}

const page = async () => {

    // 
    const alldata = await getallUsers()


    if (alldata.success) {
        const users = alldata.data
        return (
            <>
                <div className="py-20 ">
                    <div className="container w-[90%]  mx-auto p-2 overflow-auto">
                        <table className="w-full text-sm text-left rtl:text-right ">
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
                                        <td>{user.entry === true ? "Accepted" : user.entry === false ? "Rejected" : "Pending..."}</td>
                                        <td><Buttons userId={user._id} /></td>
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
