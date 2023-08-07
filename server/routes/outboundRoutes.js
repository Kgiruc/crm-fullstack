import express from "express"
import { addOutbound, deleteOutbound, editOutbound, getOutbound } from "../controllers/outboundController.js";

const routerOutbound = express.Router();

routerOutbound.get('/', getOutbound);
routerOutbound.delete('/:id', deleteOutbound);
routerOutbound.post('/', addOutbound);
routerOutbound.put('/:id', editOutbound);

export default routerOutbound;