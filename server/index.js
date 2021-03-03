import express from 'express'
import server from 'http'
import { Server } from 'socket.io'


const app = express()

server.Server(app)
const io = new Server(server)

app.use(express.json())

const start = () => {

}