"use strict"; 
const express = require('express');
const dotenv = require('dotenv');
const {chats} = require("./data/dummyData");
const connectDB = require('./config/db');
const colors = require('colors'); //makes listening output stand out
const userRoutes = require('./routes/userRoutes');
const {notFound, errorHandler} = require('./middleware/middlewareErrors');


dotenv.config();
connectDB()
const app = express();

app.use(express.json()); // allows server to accept json data

app.get('/', (req, res) =>{
    res.send("api is Running");
});

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is listening on port ${PORT}`.yellow.bold));