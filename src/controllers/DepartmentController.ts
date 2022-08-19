import { Express, Request, Response, NextFunction } from "express"
import DepartmentService from "../services/DepartmentService";
import { Department, Params } from "../types";

const DepartmentController = (app: Express) => {
  const service = new DepartmentService();

  app.get("/departments", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params: Params = req.query;
      const page = params["page"] || 1;
      const limit = params["limit"] || 5;
      
      const totalItems: number = service.getTotalDepartments();
      const totalPages: number = Math.ceil(totalItems / limit);
      
      if (page > totalPages)
        throw new Error(`Page not found. Page ${page} is requested, only ${totalPages} pages are available.`);
      
      const data: Department[] = service.getDepartments(page, limit);
  
      return res.status(200).json({
        data
      })
    }
    catch (e: any) {
      return res.status(500).json({
        error: e.message
      })
    }
  });
}

export default DepartmentController;