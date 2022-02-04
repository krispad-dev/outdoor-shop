import express from "express";
import { getAllItems, addItem } from '../controllers/itemController'


export const itemRouter = express.Router()


itemRouter.get('/', getAllItems)
itemRouter.post('/', addItem)