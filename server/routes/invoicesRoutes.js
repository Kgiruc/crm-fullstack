import exporess from "express"
import { 
    addInvoice,
    deleteInvoices,
    editInvoices,
    getCustomerInvoices,
    getInvoices,  
} from "../controllers/invoicesController.js"

const routerInvoices = exporess.Router();

routerInvoices.get('/', getInvoices)
routerInvoices.get('/:id', getCustomerInvoices)
routerInvoices.delete('/:id', deleteInvoices)
routerInvoices.post('/', addInvoice)
routerInvoices.put('/:id', editInvoices)

export default routerInvoices;