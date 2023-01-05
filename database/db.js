import mongoose from "mongoose"
mongoose.set('strictQuery', false)

const connection = async () =>{
   const URL = `mongodb+srv://pranav:pranav%401999@CLINT.8vbyxvh.mongodb.net/?retryWrites=true&w=majority`;
    try{
    await mongoose.connect(URL,{ useUnifiedTopology:true,useNewUrlparser:true })
    console.log('database connnetted');
    }catch(error){
        console.log('error while connecting with the database',error);
    }
}

export default connection;