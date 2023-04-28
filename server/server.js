import express from 'express';
import cors from 'cors';
import routerCustomers from './routes/customersRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 8800;

app.use(cors());
app.use(express.json());

app.use('/', routerCustomers);

app.get("/", (req, res) => {
    res.send("server connected")
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});