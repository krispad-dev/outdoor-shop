import express from "express";

import { validateTokenUser } from '../middleware/validateTokenUser';
import { validateTokenAdmin } from '../middleware/validateTokenAdmin';

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
    loginUser,
    authUser
} from "../controllers/authController";


export const productRouter = express.Router()
export const cartRouter = express.Router()
export const userRouter = express.Router()
export const authRouter = express.Router()

//PRODUCTS
productRouter.get('/', getAllProducts)
productRouter.post('/', validateTokenAdmin, addProduct)
productRouter.put('/', validateTokenAdmin, updateProduct)
productRouter.delete('/', validateTokenAdmin, deleteProduct)

//CART
cartRouter.post('/', validateTokenUser, addToCart)
cartRouter.get('/', validateTokenUser, getCart)
cartRouter.put('/', validateTokenUser, setCartItemAmount)
cartRouter.delete('/', validateTokenUser, deleteCartItem)

//USER
userRouter.post('/', validateTokenAdmin, registerUser)
userRouter.get('/', validateTokenAdmin, getUsers)

//AUTH 
authRouter.post('/login', loginUser)
authRouter.post('/auth', validateTokenUser, authUser)
