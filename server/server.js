import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import routerCustomers from './routes/customersRoutes.js';
import routerUsers from './routes/usersRoutes.js';
import { authMiddleware } from './middleware/AuthMiddleware.js';

const app = express();
const PORT = process.env.PORT ?? 8800;

app.use(cors({
  origin: 'http://localhost:5173', // Adres URL frontendu
  credentials: true, // Zezwalaj na przesyłanie ciasteczek
}));
app.use(express.json());
app.use(cookieParser());

app.use('/customers' , authMiddleware, routerCustomers);
app.use('/user', routerUsers);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});