const express=require('express');
const mongoose=require('mongoose');

const app=express();
const cors=require('cors');
require('dotenv').config();
mongoose.connect(process.env.DB_URI);
const cors=require('cors');

const itemrouter=require('./routes/route');
app.use('/api',itemrouter);

const path = require('path');
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine");
app.set("views",path.join(__dirname,"views"))



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
});


app.listen(PORT,()=>{
    console.log(`Server is running omn the port ${PORT}`);
})
