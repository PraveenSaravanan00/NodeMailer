console.log("Hello world");
import express from "express";
import dotenv from "dotenv";
import basicMail from "./routes/basicmailrotues.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/v1", basicMail);
app.listen(process.env.PORT, () => {
    console.log("server listening port ", process.env.PORT);
});
