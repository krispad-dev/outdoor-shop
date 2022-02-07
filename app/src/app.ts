import env from 'dotenv'
import express from "express";
import cookieParser from 'cookie-parser'
import path from 'path'

import { 
    productRouter, 
    cartRouter, 
    userRouter,
    authRouter
} from './routes/routes'


const app = express()
env.config()
app.use(express.json())
app.use(cookieParser())

app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.use(express.static(path.join(__dirname, '../public')))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

app.listen(process.env.PORT || 7000, () => console.log({

    success: true,
    message: 'Server is running on ' + process.env.PORT

}));



