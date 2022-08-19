import { Express, Request, Response, NextFunction } from "express"
import DepartmentService from "../services/DepartmentService";
import { Department, Params } from "../types";

const DepartmentController = (app: Express) => {
  const service = new DepartmentService();

  app.get("/departments", async (req: Request, res: Response, next: NextFunction) => {
    
    const params: Params = req.query;
    const page = params["page"] || 1;
    const limit = params["limit"] || 5;
    
    const data: Department[] = service.getDepartments(page, limit);

    return res.status(200).json({
      data
    })
  });
}

export default DepartmentController;