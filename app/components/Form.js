"use client"
import Header from './Header';
import React from 'react'
import { useState } from 'react';
import Image from "next/image";
const Form = () => {
    const [name, setName] = useState("");
    const [phone, setphone] = useState("")
    const [company, setCompany] = useState("");
    const [address, setAddress] = useState("");
    const [type, setType] = useState("Guests")
    const [purpose, setPurpose] = useState("Meeting")
    const [compname, setCompname] = useState("")
    const [compadd, setCompadd] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('/api/users', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone,
                    company,
                    address,
                    compname,
                    compadd,
                    type,
                    purpose,
                })
            });
            response = await response.json();
            setName("");
            setphone("")
            setCompany("");
            setAddress("");
            setCompname("");
            setCompadd("");
            setType("Guests")
            setPurpose("Meeting")
            if (response.success) {
                alert(response.message)
            } else {
                alert(response.message)
            }
        } catch {
            alert("An error occured at handlesubmit")
        }
    };
    const handlereset = async (e) => {
        setName("");
        setphone("")
        setCompany("");
        setAddress("");
        setCompname("");
        setCompadd("");
        setType("Guests")
        setPurpose("Meeting")
    };
    return (
        <>
            <Header />
            <div className="mt-3">
                <form
                    onSubmit={handleSubmit} onReset={handlereset}
                    className="relative  w-[70%] pt-16 md:w-[55%] py-2 mx-auto gap-5 flex flex-col " >
                    <div className="mx-auto py-2">
                        <h1 className="text-2xl font-bold text-center">Visitor Details</h1>
                    </div>
                    <div className='mx-auto md:grid md:grid-cols-2 md:gap-6'>
                        <div className=''>
                            <label htmlFor="name" className="mb-2 ">Username</label>
                            <div className="flex w-full mb-2">
                                <span className="shadow inline-flex items-center px-4 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md ">
                                    <Image
                                        src="/person1.svg"
                                        alt='img'
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </span>
                                <input onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="rounded-e-lg text-black w-[100%]  p-2.5 " />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="mb-2 ">Phone</label>
                            <div className="flex w-full mb-2">
                                <span className="shadow inline-flex items-center px-4 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md ">
                                    <Image
                                        src="/phone.svg"
                                        alt='img'
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </span>
                                <input
                                    onChange={(e) => setphone(e.target.value)}
                                    value={phone}
                                    type="tel"
                                    id="phone"
                                    placeholder="+91-0000000000"
                                    className="rounded-e-lg text-black w-[100%] p-2.5"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="mb-2 ">Company</label>
                            <div className="flex w-full mb-2">
                                <span className="shadow inline-flex items-center px-4 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md ">
                                    <Image
                                        src="/company.svg"
                                        alt='img'
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </span>
                                <input
                                    onChange={(e) => setCompany(e.target.value)}
                                    value={company}
                                    type="text"
                                    id="company"
                                    placeholder="Company Name"
                                    className="rounded-e-lg text-black w-[100%] p-2.5"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="mb-2 ">Company Address</label>
                            <div className="flex w-full mb-2">
                                <span className="shadow inline-flex items-center px-4 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md ">
                                    <Image
                                        src="/address.svg"
                                        alt='img'
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </span>
                                <input
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                    type="text"
                                    id="address"
                                    placeholder="Company Address"
                                    className="rounded-e-lg text-black w-[100%] p-2.5"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="mb-2 ">Type</label>
                            <div className="flex w-full mb-2">
                                <span className="shadow inline-flex items-center px-4 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md ">
                                    <Image
                                        src="/person.svg"
                                        alt='img'
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </span>
                                <select onChange={(e) => setType(e.target.value)}
                                    value={type}
                                    className="border rounded-e-lg  block w-full p-2.5 " name="cars" id="cars" form="carform">

                                    <option className='text-black' value="Guests">Guests</option>
                                    <option className='text-black' value="Interviewer">Interviewer</option>
                                    <option className='text-black' value="Courier">Courier</option>
                                    <option className='text-black' value="Client">Client</option>
                                    <option className='text-black' value="Vendor">Vendor</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="mb-2 ">Purpose</label>
                            <div className="flex w-full mb-2">
                                <span className="shadow inline-flex items-center px-4 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md ">
                                    <Image
                                        src="/purpose.svg"
                                        alt='img'
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </span>
                                <select onChange={(e) => setPurpose(e.target.value)}
                                    value={purpose}
                                    className="border rounded-e-lg  block w-full p-2.5 " name="cars" id="cars" form="carform">
                                    <option className='text-black' value="Meeting">Meeting</option>
                                    <option className='text-black' value="Parcel Delivery">Parcel Delivery</option>
                                    <option className='text-black' value="Parcel Pickup">Parcel Pickup</option>
                                    <option className='text-black' value="Job Interview">Job Interview</option>
                                    <option className='text-black' value="Sales Inquiry">Sales Inquiry</option>
                                    <option className='text-black' value="Others">Others</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-base pt-3 font-bold text-left">Meeting With...</h1>
                    <div className="mx-auto md:grid  md:grid-cols-2 md:gap-6">

                        <div >
                            <label htmlFor="name" className="mb-2 ">Name</label>
                            <div className="flex w-full mb-2">
                                <span className="shadow inline-flex items-center px-4 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md ">
                                    <Image
                                        src="/username.svg"
                                        alt='img'
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </span>
                                <input
                                    onChange={(e) => setCompname(e.target.value)}
                                    value={compname}
                                    type="text"
                                    id="empname"
                                    placeholder="Employee Name"
                                    className="rounded-e-lg text-black w-[100%] p-2.5"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="mb-2 ">Department</label>
                            <div className="flex w-full mb-2">
                                <span className="shadow inline-flex items-center px-4 bg-gray-100 border border-e-0 border-gray-300 rounded-s-md ">
                                    <Image
                                        src="/department.svg"
                                        alt='img'
                                        width={30}
                                        height={30}
                                        priority
                                    />
                                </span>
                                <input
                                    onChange={(e) => setCompadd(e.target.value)}
                                    value={compadd}
                                    type="text"
                                    id="department"
                                    placeholder="Employee Department"
                                    className="rounded-e-lg text-black w-[100%] p-2.5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-16">
                        <button className="bg-gradient-to-r  from-[#832121] via-[#a55151] to-[#d77878] rounded-lg px-9 py-3 text-white font-bold" type="reset">
                            Reset
                        </button>
                        <button className="bg-gradient-to-r from-[#216583] via-[#518ca5] to-[#78bad7]   rounded-lg px-6 py-3 text-white font-bold" type="submit">
                            Request
                        </button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Form

