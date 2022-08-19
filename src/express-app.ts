import { Express, NextFunction, Request, Response } from "express"
import departments from "../src/data/departments.json";

const expressApp = (app: Express) => {

  app.get("/departments", async (req: Request, res: Response, next: NextFunction) => {

    const data = departments.data;

    return res.status(200).json({
      data
    })
  });
}

export default expressApp;