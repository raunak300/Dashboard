const express=require('express')
const app=express();
const dotenv=require('dotenv').config();
const Port=process.env.PORT;
app.use(express.json());



app.listen(Port,(req,res)=>{
    console.log( "Server Running on Port:",Port )
})