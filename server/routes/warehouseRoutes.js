import express from "express";
import {
    getwarekhouseItems,
    deleteWarekhouseItems,
    addWarehouseItem
} from "../controllers/warehouseController.js";

const routerWarehouse = express.Router();

routerWarehouse.get('/', getwarekhouseItems);
routerWarehouse.delete('/:id', deleteWarekhouseItems);
routerWarehouse.post('/', addWarehouseItem);

export default routerWarehouse;