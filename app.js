require("dotenv").config();
const express=require("express");
const app=express();
let PORT=process.env.PORT || 5000
const mongoose=require('mongoose');

//Api Routes
const EmployeeRoutes=require('./routes/EmployeeRoutes')

app.use(express.json());
main().then(()=>{
    console.log('Database is Connected Successfully');
}).catch((error)=>{
    console.log(`There is some error in database connection : ${error}`);
})

async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
}

app.get('/',(req,res)=>{
    res.json({message:"Hello from Backend"});
})

app.use('/api/employees',EmployeeRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})