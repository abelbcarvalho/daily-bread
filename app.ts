import express from "express";
import bodyParser from 'body-parser';
import accountRouter from "@routes/AccountRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/api/user", accountRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
