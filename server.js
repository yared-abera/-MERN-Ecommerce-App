const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//create adatabase connection -> connect to database

mongoose.connect( 'mongodb+srv://yada:yada123@cluster0.7xaqy.mongodb.net/Cluster0?retryWrites=true&w=majority'

).then(() => {
    console.log('connected to database');
}).catch((error) => {
    console.log(error);
});


const app =express();
const port = process.env.PORT || 5000; 

//middleware
 

app.use(  
   
    cors({
        origin:'http://localhost:5173/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
             'Authorization',
             'Cache-Control',
             'Expires',
             'Pragma',],
        credentials: true,
    })
);
 
app.use(express.json());
app.use(cookieParser());
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
