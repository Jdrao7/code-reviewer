const express=require('express')
const aiRoutes=require('./routes/ai.routes.js')

app=express()

app.use(express.json())

app.get('/',(req,res)=>{
	res.send('hello');
})

app.use('/ai',aiRoutes);


module.exports=app
