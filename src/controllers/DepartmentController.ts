import { Express, Request, Response, NextFunction } from "express"
import DepartmentService from "../services/DepartmentService";
import { Department } from "../types/department";

const DepartmentController = (app: Express) => {
  const service = new DepartmentService();

  app.get("/departments", async (req: Request, res: Response, next: NextFunction) => {
    const data: Department[] = service.getDepartments();    

    return res.status(200).json({
      data
    })
  });
}

export default DepartmentController;