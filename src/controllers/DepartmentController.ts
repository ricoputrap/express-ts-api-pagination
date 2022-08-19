import { Express, Request, Response, NextFunction } from "express"
import DepartmentService from "../services/DepartmentService";
import { Department, Params, ResponseMultiple } from "../types";

const DepartmentController = (app: Express) => {
  const service = new DepartmentService();

  app.get("/departments", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const params: Params = req.query;
      const page = params["page"] || 1;
      const limit = params["limit"] || 5;
      
      const totalItems: number = service.getTotalDepartments();
      const totalPages: number = Math.ceil(totalItems / limit);

      // page not found
      if (page > totalPages)
        throw new Error(`Page not found. Page ${page} is requested, only ${totalPages} pages are available.`);
      
      const data: Department[] = service.getDepartments(page, limit);
      const response: ResponseMultiple = { 
        data,
        totalItems,
        totalPages
      };

      // next page data node
      if (page < totalPages) {
        const nextPage = +page + 1;
        response.next = {
          page: nextPage,
          url: `/departments?page=${nextPage}&limit=${limit}`
        }
      }

      // previous page data node
      if (page > 1) {
        const prevPage = page - 1;
        response.prev = {
          page: prevPage,
          url: `/departments?page=${prevPage}&limit=${limit}`
        }
      }
  
      return res.status(200).json(response)
    }
    catch (e: any) {
      return res.status(500).json({
        error: e.message
      })
    }
  });
}

export default DepartmentController;