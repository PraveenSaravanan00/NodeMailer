import express from "express";
import { createBasicMail } from "../controllers/basicmailcontrollers.js";

const Router=express.Router();

console.log("enter router file")
Router.post("/createMail",createBasicMail)


export default Router