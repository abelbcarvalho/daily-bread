import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import accountRouter from "@routes/AccountRoutes";
import bankRouter from "@routes/BankRoutes";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/api/user", accountRouter);
app.use("/api/bank", bankRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
