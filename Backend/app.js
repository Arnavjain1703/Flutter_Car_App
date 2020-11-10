const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const bodyParser = require('body-parser');
const compression = require('compression')
const app = express();
const helmet = require("helmet");
app.use(helmet());
app.use(compression());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();  
})

app.use(bodyParser.json());

app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    const data =error.data;
    res.status(status).json({message:message,data:data});
})
console.log(process.env.mongo);
mongoose.connect(process.env.mongo)
.then(()=>
{
    console.log("connected");
})

.then((result)=>
{
    app.listen(process.env.PORT||8080);
})
.catch(err=>
{
    console.log(err);
    next(err);
})