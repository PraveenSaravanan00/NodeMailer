import express from "express";
import { createBasicMail } from "../controllers/basicmailcontrollers.js";

const Router=express.Router();


Router.post("/createMail",createBasicMail)


export default Router