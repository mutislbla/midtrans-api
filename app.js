import express from "express";
// bodyParser untuk menerima data dari frontend ke backend
import bodyParser from "body-parser";
//cors untuk walaupun beda domain tetap bisa menerima data dari server
import cors from "cors";
import PaymentRoutes from "./routes/PaymentRoutes.js";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/payment", PaymentRoutes);

export default app;
