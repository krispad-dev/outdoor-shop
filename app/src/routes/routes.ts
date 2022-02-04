import express from "express";

import { 
    addToCart, 
    getCart 
} from "../controllers/cartController";

import { 
    getAllProducts, 
    addProduct, 
    updateProduct, 
    deleteProduct 
} from '../controllers/productController'


export const productRouter = express.Router()
export const cartRouter = express.Router()


productRouter.get('/', getAllProducts)
productRouter.post('/', addProduct)
productRouter.put('/', updateProduct)
productRouter.delete('/', deleteProduct)

cartRouter.post('/', addToCart)
cartRouter.get('/', getCart)