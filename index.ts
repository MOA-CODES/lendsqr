// require('dotenv').config()
import 'dotenv/config';
import bodyParser from 'body-parser';
import express, {Express, Request, Response} from "express";

import db from "./db/conn"

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const getAll = async()=>{
    return await db("User").select("*");
}

app.get('/', (req:Request, res:Response)=>{
    res.json("lendsqr task")
})

app.get('/api/user', async (req: Request, res: Response)=>{
    const users = await getAll();

    res.status(200).json(users)
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})