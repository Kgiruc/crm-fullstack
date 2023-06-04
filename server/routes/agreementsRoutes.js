import express from "express"
import {    
    addAgreements,
    deleteAgreements, 
    editAgreement, 
    getAgreements, 
    getCustomerAgreements 
} from "../controllers/agreementsController.js";

const routerAgreements = express.Router();

routerAgreements.get('/', getAgreements);
routerAgreements.get('/:id', getCustomerAgreements);
routerAgreements.delete('/:id', deleteAgreements);
routerAgreements.post('/', addAgreements);
routerAgreements.put('/:id', editAgreement);

export default routerAgreements;