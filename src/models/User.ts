import mongoose,{Document, Schema} from 'mongoose'

interface userType extends Document {
    username: string,
    email: string,
    password: string
    limit:number
    testimonials:mongoose.Types.ObjectId[]
}

const userSchema:Schema<userType>= new Schema({
   username:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
   },
   password:{
    type:String,
    required:true
   },
   limit:{
    type:Number,
    default:3
   },
   testimonials:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Testimonial'
   }]
    
},{
    timestamps:true
})

const User =mongoose.models.User || mongoose.model<userType>("User",userSchema)
export default User;  