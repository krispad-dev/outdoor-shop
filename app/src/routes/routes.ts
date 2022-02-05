import express from "express";

import { 
    registerUser,
    getUsers
} from "../controllers/userController";

import { 
    addToCart, 
    getCart,
    setCartItemAmount,
    deleteCartItem
} from "../controllers/cartController";

import { 
    getAllProducts, 
    addProduct, 
    updateProduct, 
    deleteProduct 
} from '../controllers/productController'

import { 
    loginUser
} from "../controllers/authController";

import { authUser } from '../middleware/authUser';



export const productRouter = express.Router()
export const cartRouter = express.Router()
export const userRouter = express.Router()
export const authRouter = express.Router()


//PRODUCTS
productRouter.get('/', getAllProducts)
productRouter.post('/', addProduct)
productRouter.put('/', updateProduct)
productRouter.delete('/', deleteProduct)

//CART
cartRouter.post('/', addToCart)
cartRouter.get('/', getCart)
cartRouter.put('/', setCartItemAmount)
cartRouter.delete('/', deleteCartItem)

//USER
userRouter.post('/', registerUser)
userRouter.get('/', getUsers)

//AUTH 
authRouter.post('/login', authUser, loginUser)
