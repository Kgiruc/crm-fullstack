import express from "express"
import { getAgreements, getCustomerAgreements } from "../controllers/agreementsController.js";

const routerAgreements = express.Router();

routerAgreements.get('/', getAgreements);
routerAgreements.get('/:id', getCustomerAgreements);

export default routerAgreements;