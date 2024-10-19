import mongoose from "mongoose"

type Connection = {
    isConnected?:number
}

const connection:Connection ={}

const connectDatabase = async ()=>{
    const url = process.env.MONGODB_URI || ""
    try {
        if(connection.isConnected){
            console.log("DataBase is already connected")
            return;
    
        }
        const dbConnection = await mongoose.connect(url, {
            dbName:"Testimonials"
        })
        connection.isConnected = dbConnection.connections[0].readyState
        console.log("DataBase is connected")
    } catch (e) {
        console.log(e)
        console.log("DataBase connection Failed")
    }
}

export default connectDatabase