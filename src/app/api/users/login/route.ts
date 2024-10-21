import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import connectDatabase from '@/utils/database';
import User from '@/models/User';
import { cookies } from 'next/headers';

export async function POST(req: Request, res: Response) {
    await connectDatabase();


    try {

        const { email, password } = await req.json();
        const user = await User.findOne({ email })
        console.log(user)
        if (!user) {
            return Response.json({ success: false, message: "Invalid Cradentials" }, { status: 400 })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return Response.json({ success: false, message: "Invalid Cradentails" }, { status: 400 })
        }
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        cookies().set("token", token, {

            maxAge: 300,
            httpOnly: true,
            secure: false,
        })
        return Response.json({ success: true, message: `Valid user ${user.username}` }, { status: 200 })

    } catch (error) {
        console.error('Error occurred:', error);
        return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 })
    }
}
