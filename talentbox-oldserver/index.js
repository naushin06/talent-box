const express= require("express");
const cors=require("cors");
const app=express();
const authRoutes=require("./Routes/AuthRoutes");
const mongoose=require("mongoose")
const cookieParser=require("cookie-parser")


app.listen(4000,()=>{
    console.log("Port started")
})
app.use(
    cors({
        origin:["http://localhost:4000"],
        method:["GET","POST"],
        credentials:true
    })
)

mongoose.connect("mongodb+srv://root:password123*@cluster0.hxeftjt.mongodb.net/testing",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
console.log("Db CONNECT");

}).catch(err=>{
    console.log(err.message);
})

app.use(cookieParser())
app.use(express.json());
app.use("/talentbox",authRoutes)
