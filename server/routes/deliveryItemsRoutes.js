import express from "express";
import { addDeliveryItems } from "../controllers/deliveryItemsController.js";

const routerDeliveryItems = express.Router();

routerDeliveryItems.post('/', addDeliveryItems)

export default routerDeliveryItems;