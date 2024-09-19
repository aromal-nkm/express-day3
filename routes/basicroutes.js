const express=require('express');
const router=express.Router();


const data=[{employee:1,user:'sanju',location:'tvm'},{employee:2,user:'chinju',location:'tvm'}]

function basicroutes(nav) {
    router.get('/employee',(req,res)=>{
        res.render("employee",{
            title:"employeelist",
            data,
            nav
        });
    })
return router
    
}
























module.exports=basicroutes