const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const register=require("./routes/register");
const products=require("./products");
const login=require("./routes/login");
const stripe=require("./routes/stripe");
const app=express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use("/api/register",register);
app.use("/api/login",login);
app.use("/api/stripe",stripe);
app.get("/",(req,res)=>{
    res.send("welcome to our shop..")
});
app.get("/products",(req,res)=>{
    res.send(products);
});
const port=process.env.PORT||8000;
const uri=process.env.DB_URI
app.listen(port,console.log(`server running on port ${port}`));
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>console.log("mongodb connection succeffull"))
.catch((err)=>console.log("mongodb connection failed",err.message))