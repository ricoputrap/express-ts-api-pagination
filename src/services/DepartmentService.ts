import departments from "../data/departments.json";
import { Department } from "../types";

class DepartmentService {
  public getDepartments(page: number, limit: number): Department[] {
    
    const startIndex: number = (page - 1) * limit;
    const endIndex: number = startIndex + limit;
    const data = departments.data.slice(startIndex, endIndex);

    return data
  }
}

export default DepartmentService;