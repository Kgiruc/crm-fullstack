import express from 'express';
import cors from 'cors';
import routerCustomers from './routes/customersRoutes.js';
import routerUsers from './routes/usersRoutes.js';
import { authMiddleware } from './middleware/AuthMiddleware.js';

const app = express();
const PORT = process.env.PORT ?? 8800;

app.use(cors());
app.use(express.json());

app.use('/customers' , authMiddleware, routerCustomers);
app.use('/user', routerUsers);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});