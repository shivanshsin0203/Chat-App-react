const express=require('express');
const http=require('http');
const socketio=require('socket.io');
const app=express();
const server=http.createServer(app);
const io=socketio(server);

io.on('connection',(socket)=>{
    console.log('a user connected '+socket.id);
       socket.on('msg_send',async (data)=>{
        console.log(data);
       })
});

server.listen(3001,async()=>{
    console.log('Server started at 3001');
   
})