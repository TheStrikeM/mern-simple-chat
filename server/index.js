import express from 'express'
import server from 'http'
import mongoose from 'mongoose'
import config from 'config'
import { Server } from 'socket.io'


const app = express()
const PORT = config.get("PORT") || 5000

server.Server(app)
export const io = new Server(server)

app.use(express.json())


const start = async () => {
    try {
        await mongoose.connect(config.get("DB_CONNECT"))

        app.listen(PORT, () => {
            console.log(`Server started in PORT - ${PORT}`)
        })
    } catch (e) {
        throw new Error("Error in index.js")
    }
}

start()