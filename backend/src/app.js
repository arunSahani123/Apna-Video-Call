import express from 'express';
import {createServer} from 'node:http';

import {Server} from 'socket.io';
import mongoose from 'mongoose';
import { connectToSocket } from './controllers/socketManager.js';
import userRoutes from './routes/users_routes.js'

import cors from 'cors';
const app =express();
const server = createServer(app);
const io = connectToSocket (server);

app.set("port",(process.env.PORT || 8000))

app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);
;

const start = async ()=>{
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://arunsahani258:zxd8OAPP7LF2rok8@cluster0.3e4kd.mongodb.net/")
    console.log(`MONGO Conneted DB Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log("server started on port 8000")
    })
}
start();