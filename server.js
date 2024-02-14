const express = require('express');
const app = express();
const cors = require('cors');
const host = 'localhost';
const port = 3001;
const mongoose = require('mongoose');
const router = require('./router')

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://lahirudhananjaya10:GOnjKwp2vq8D7LwK@cluster0.klyfyft.mongodb.net/?retryWrites=true&w=majority';

const connect=async()=>{
    try{
        await mongoose.connect(uri);
        console.log('connected to Mongodb');
    }catch(error){
        console.log('Mongodb Error: '+error);
    }
}

connect();

const server = app.listen(port,host,()=>{
    console.log('Node server is listning to '+ server.address().port);
})

app.use('/api',router);
