import express from "express";
import { getAllItems, addItem, updateProduct } from '../controllers/itemController'


export const productRouter = express.Router()


productRouter.get('/', getAllItems)
productRouter.post('/', addItem)
productRouter.put('/', updateProduct)