import env from 'dotenv'
import express from "express";


import { itemRouter } from './routes/routes'

const app = express()
env.config()
app.use(express.json())
app.use('/api/products', itemRouter)

app.use(express.static('./public'))

app.listen(process.env.PORT || 7000, () => console.log({

    success: true,
    message: 'Server is running on ' + process.env.PORT

}));



