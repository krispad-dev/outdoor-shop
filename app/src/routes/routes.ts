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
    deleteProduct,
    getProduct
} from '../controllers/productController'

import { 
    loginUser,
    authUser,
    logoutUser
} from "../controllers/authController";


import { 
    orderProducts 
} from "../controllers/orderController";


export const productRouter = express.Router()
export const cartRouter = express.Router()
export const userRouter = express.Router()
export const authRouter = express.Router()
export const orderRouter = express.Router()

//PRODUCTS
productRouter.get('/', getAllProducts)
productRouter.get('/1', getProduct)
productRouter.post('/', validateTokenAdmin, addProduct)
productRouter.put('/', validateTokenAdmin, updateProduct)
productRouter.delete('/', validateTokenAdmin, deleteProduct)

//CART
cartRouter.post('/', validateTokenUser, addToCart)
cartRouter.get('/', validateTokenUser, getCart)
cartRouter.put('/', validateTokenUser, setCartItemAmount)
cartRouter.delete('/', validateTokenUser, deleteCartItem)

//USER
userRouter.post('/', registerUser)
userRouter.get('/', validateTokenAdmin, getUsers)

//AUTH 
authRouter.post('/login', loginUser)
authRouter.post('/logout', logoutUser)
authRouter.post('/', validateTokenUser, authUser)

//ORDER 
orderRouter.post('/', validateTokenUser, orderProducts)