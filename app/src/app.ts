import env from 'dotenv'
import express from "express";

import { 
    productRouter, 
    cartRouter, 
    userRouter,
    authRouter
} from './routes/routes'


const app = express()
env.config()
app.use(express.json())

app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.use(express.static('./public'))

app.listen(process.env.PORT || 7000, () => console.log({

    success: true,
    message: 'Server is running on ' + process.env.PORT

}));



