import Image from "next/image"
import Header from "@/app/components/Header"
async function getuser(userIdParam) {

    let response = await fetch(`http://localhost:3000/api/users/${userIdParam}`,
        {
            cache: 'no-store',
            method: 'GET'
        })
    response = await response.json()
    return response
}
export default async function viewuser({ params }) {
    const result = await getuser(params.userid)
    const user = result.data
    const id = user._id
    const part1 = id.substring(18, id.length);
    let date = user.createdAt
    const day = date.substring(4, 10);
    const year = date.substring(11, 15);
    let time = date.substring(16, 24);


    return (
        <>
            <Header />
            <div className="py-24">
                <div className="container border-2 bg-[#eaeaec] border-slate-600 rounded-lg flex w-[40%] max-xl:w-[60%] max-md:w-[70%] max-sm:w-[98%]  mx-auto">

                    <div className="photo w-1/3 border-r-2 border-slate-600">
                        <div className="mt-20 ml-1 ">

                            <Image className=''
                                src="/photo.svg"
                                alt='img'
                                width={200}
                                height={200}
                                priority
                            />


                        </div>
                    </div>
                    <div className="photo w-2/3">
                        <h1 className="text-4xl text-center">{user.name}</h1>
                        <div className="container flex">
                            <div className="left w-1/3 ">
                                <div className="px-2 py-1 text-black">
                                    Phone
                                </div>
                                <div className="px-2 py-1 text-black">
                                    Company
                                </div>
                                <div className="px-2 py-1 text-black">
                                    Address
                                </div>
                                <div className="px-2 py-1 text-black">
                                    Code
                                </div>
                                <div className="px-2 py-1 pb-7 text-black">
                                    To Meet
                                </div>
                                <div className="px-2 py-1 text-black">
                                    Purpose
                                </div>
                                <div className="px-2 py-1 text-black">
                                    Visit Date
                                </div>
                                <div className="px-2 py-1 text-black">
                                    In Time
                                </div>
                            </div>
                            <div className="right w-2/3 ">
                                <div className="px-2 py-1 text-black">
                                    : {user.phone}
                                </div>
                                <div className="px-2 py-1 text-black">
                                    : {user.company}
                                </div>
                                <div className="px-2 py-1 text-black">
                                    : {user.address}
                                </div>
                                <div className="px-2 py-1 text-black">
                                    : {part1}
                                </div>
                                <div className="px-2 py-1 text-black">
                                    : {user.compname}<br />
                                    &nbsp;&nbsp;{user.compadd}
                                </div>
                                <div className="px-2 py-1 text-black">
                                    : {user.purpose}
                                </div><div className="px-2 py-1 text-black">
                                    : {day}-{year}
                                </div>
                                <div className="px-2 py-1 text-black">
                                    : {time}
                                </div>
                            </div>

                        </div>
                        <div className="container flex  pt-3">
                            <div className="visit w-1/3 text-black">Visitor Sign</div>
                            <div className="emply w-1/3 text-black">Employe Sign</div>
                            <div className="security w-1/3 text-black">Security Sign</div>
                        </div>

                    </div>
                </div >

            </div >
        </>
    )
}