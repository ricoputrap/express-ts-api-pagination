import { Express, Request, Response, NextFunction } from "express"
import DepartmentService from "../services/DepartmentService";

const DepartmentController = (app: Express) => {
  const service = new DepartmentService();

  app.get("/departments", async (req: Request, res: Response, next: NextFunction) => {
    const data = service.getDepartments();    

    return res.status(200).json({
      data
    })
  });
}

export default DepartmentController;