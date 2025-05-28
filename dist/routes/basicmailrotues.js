"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const basicmailcontrollers_js_1 = require("../controllers/basicmailcontrollers.js");
const Router = express_1.default.Router();
Router.post("/createMail", basicmailcontrollers_js_1.createBasicMail);
exports.default = Router;
