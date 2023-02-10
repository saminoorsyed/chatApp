"use strict"; 
const express = require('express');
const dotenv = require('dotenv');
const {chats} = require("./data/dummyData");

const app = express();

app.get('/', (req, res) =>{
    res.send("api is Running");
});

app.get('/api/chat', (req, res)=>{
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) =>{
    const singleChat = chats.find((c)=> c._id === req.params.id);
    res.send(singleChat);
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is listening on port 5000 ${PORT}`));