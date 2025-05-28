"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello world");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const basicmailrotues_js_1 = __importDefault(require("./routes/basicmailrotues.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", basicmailrotues_js_1.default);
app.listen(process.env.PORT, () => {
    console.log("server listening port ", process.env.PORT);
});
