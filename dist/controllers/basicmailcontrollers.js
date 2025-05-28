"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBasicMail = void 0;
const basicmailservices_js_1 = require("../services/basicmailservices.js");
const createBasicMail = async (req, res) => {
    try {
        const response = await (0, basicmailservices_js_1.createMail)(req);
        res.status(200).json({
            statusCode: "200",
            Message: "Mail sented successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            statusCode: "500",
            Message: "Internal server Error",
        });
    }
};
exports.createBasicMail = createBasicMail;
