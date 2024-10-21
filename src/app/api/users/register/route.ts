import bcrypt from 'bcrypt';

import connectDatabase from '@/utils/database';
import User from '@/models/User';

export async function POST(req: Request, res: Response) {
    await connectDatabase();


    try {

        const { username, email, password } = await req.json();
        const user = await User.findOne({ email })
        console.log(user)
        if (user) {
            return Response.json({ success: false, message: "Email Already Registered" }, { status: 400 })
        }


        const hashedPassword = await bcrypt.hash(password, 10)
        const createdUser = await User.create({
            username,
            email,
            password: hashedPassword

        })
        return Response.json({ success: true, message: "User Created" }, { status: 201 })

    } catch (error) {
        console.error('Error occurred:', error);
        return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 })
    }
}
