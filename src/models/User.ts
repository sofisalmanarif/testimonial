import mongoose,{Document, Schema} from 'mongoose'

interface userType extends Document {
    username: string,
    email: string,
    password: string
    limit:number
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
    
},{
    timestamps:true
})

const User = mongoose.models.User || mongoose.model<userType>("User",userSchema)
export default User;  