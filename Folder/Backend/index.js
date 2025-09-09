const express=require('express')
const app=express();
const dotenv=require('dotenv').config();
const Port=process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');
app.use(express.json());
const cors=require('cors')

app.use(cors({
    origin:'http://localhost:5173'

}))



app.get('/getdata',(req,res)=>{
    const filePath=path.join(__dirname,'data')
    let allData = {};

  fs.readdirSync(filePath).forEach(file => {
    if (file.endsWith('.json')) {
      const fileData = require(path.join(filePath, file));
      const fileName = path.basename(file, '.json'); // ex: "data1"
      allData[fileName] = fileData;
    }
  });
  console.log(allData)
  res.json(allData);
    
})

app.listen(Port,(req,res)=>{
    console.log( "Server Running on Port:",Port )
})