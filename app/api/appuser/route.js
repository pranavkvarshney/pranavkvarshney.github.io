import { connect } from "@/app/utils/dbconnect/dbconnect";
import appUser from "@/app/utils/schema/appuserschema";
import bcryptjs from "bcryptjs"
import { NextResponse } from "next/server";
connect()
export async function POST(request) {
    const { name, email, password } = await request.json()
    try {
        const checkUser = await appUser.findOne({ email })
        if (checkUser) {
            return NextResponse.json({ success: false, message: "User already exists" })
        }
        const salt = await bcryptjs.genSalt(10)
        const hashedpassword = await bcryptjs.hash(password, salt)
        const user = new appUser({
            name: name,
            email: email,
            password: hashedpassword,
            toggle: false

        })
        await user.save()

        return NextResponse.json({ success: true, message: "User has been registered.You can Login Now😊" })
    } catch {
        return NextResponse.json({ success: false, message: "Can't create user" })
    }
}