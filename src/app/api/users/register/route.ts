import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';

import connectDatabase from '@/utils/database';

export async function GET(req: Request, res: Response) {
    await connectDatabase();  // Await the connection if it's asynchronous
    console.log('Database connected');

    try {
        // You might want to validate that the request is correct
        // const { username, email, password } = await req.json();

        return new Response(JSON.stringify({ message: "hello" }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error occurred:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
