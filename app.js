const express=require('express')
const app=new express();
const morgan=require('morgan')
app.use(morgan('dev'))



app.set('view engine','ejs')
app.set('views',__dirname+'/views');

app.use(express.static(__dirname +'/public'))
const nav=[
    {
        link:'/employee',name:'Home'
    },{
        link:'/employeeform',name:'ADD Employee'
    }
]
const basicroutes=require('./routes/basicroutes')(nav);
app.use('/basic',basicroutes);




app.listen(5000,()=>{

    console.log('server running on port 5000')
})