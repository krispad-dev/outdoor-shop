import express from "express";
import { getAllProducts, addProduct, updateProduct, deleteProduct } from '../controllers/productController'


export const productRouter = express.Router()


productRouter.get('/', getAllProducts)
productRouter.post('/', addProduct)
productRouter.put('/', updateProduct)
productRouter.delete('/', deleteProduct)