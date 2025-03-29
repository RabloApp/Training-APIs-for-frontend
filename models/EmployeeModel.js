const mongoose=require('mongoose');

const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('Employee',EmployeeSchema);