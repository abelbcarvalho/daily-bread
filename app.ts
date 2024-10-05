import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import accountRouter from "@routes/AccountRoutes";
import bankRouter from "@routes/BankRoutes";
import moneyRouter from "@routes/MoneyRoutes";
import recursivePayRouter from "@routes/RecursivePayRoutes";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/api/user", accountRouter);
app.use("/api/bank", bankRouter);
app.use("/api/money", moneyRouter);
app.use("/api/recursive-payment", recursivePayRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
