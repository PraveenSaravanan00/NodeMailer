import { Request, Response } from "express";
import { createMail } from "../services/basicmailservices.js";
  console.log("before createBasicMail controllers")

export const createBasicMail = async (req: Request, res: Response) => {
  console.log("createBasicMail controllers")
  try {
    const response = await createMail(req);
    res.status(200).json({
      statusCode: "200",
      Message: "Mail sented successfully",
      data:response
    });
  } catch (error: any) {
    res.status(500).json({
      statusCode: "500",
      Message: "Internal server Error",
    });
  }
};
