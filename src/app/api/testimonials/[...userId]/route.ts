import Testimonial from "@/models/Testimonial"
import User from "@/models/User"
import connectDatabase from "@/utils/database"

export async function POST(req: Request, { params }: { params: { userId: string } }) {
    await connectDatabase()

    try {
        const {   name, content,rating,photo } = await req.json()
        const { userId } = params
        console.log("PHOTO",photo)
        if(!name || !content  || !rating ){
            return Response.json({ success: false, message: "Enter All Fileds" }, { status: 400 })
        }
        const user = await User.findById(userId)
        console.log(user)
    
        if(user.limit<=0){
            return Response.json({ success: false, message: "User Has Reached Free Limit" }, { status: 400 })
        }
        
        if (!user) {
            return Response.json({ success: false, message: "User Not Found" }, { status: 400 })
        }
        
        const createdTestimonial = await Testimonial.create({
            name,
            content,
            rating,
            photo,
            userId
        })
        user.limit = user.limit - 1 
        await user.save()
    
        return Response.json({ success:true,message: "Review Send", user ,createdTestimonial},{status:201})
    } catch (error) {
        console.error('Error occurred:', error);
        return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 })
    }
}


export async function GET(req: Request, { params }: { params: { userId: string } }) {
    await connectDatabase()

    try {
       
        const { userId } = params
    
        const user = await User.findById(userId)
        console.log(user)
    
        if (!user) {
            return Response.json({ success: false, message: "User Not Found" }, { status: 400 })
        }
        
        const usersAllTestimonial = await Testimonial.find({userId})
    
        return Response.json({ success:true , usersAllTestimonial},{status:200})
    } catch (error) {
        console.error('Error occurred:', error);
        return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 })
    }
}