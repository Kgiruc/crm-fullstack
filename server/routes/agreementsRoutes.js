import express from "express"
import {    
    deleteAgreements, 
    getAgreements, 
    getCustomerAgreements 
} from "../controllers/agreementsController.js";

const routerAgreements = express.Router();

routerAgreements.get('/', getAgreements);
routerAgreements.get('/:id', getCustomerAgreements);
routerAgreements.delete('/:id', deleteAgreements);

export default routerAgreements;