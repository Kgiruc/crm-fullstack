import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import routerCustomers from './routes/customersRoutes.js';
import routerUsers from './routes/usersRoutes.js';
import { authMiddleware } from './middleware/AuthMiddleware.js';
import routerAgreements from './routes/agreementsRoutes.js';
import routerInvoices from './routes/invoicesRoutes.js';
import routerTasks from './routes/tasksRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 8800;

app.use(cors({
  origin: 'http://localhost:5173', // Adres URL frontendu
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/customers' , authMiddleware, routerCustomers);
app.use('/agreements' , authMiddleware, routerAgreements);
app.use('/invoices' , authMiddleware, routerInvoices);
app.use('/tasks' , authMiddleware, routerTasks);
app.use('/user', routerUsers);
console.log(new Date().toLocaleString());
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});