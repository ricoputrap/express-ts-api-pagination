import departments from "../data/departments.json";
import { Department } from "../types/department";

class DepartmentService {
  public getDepartments(): Department[] {
    return departments.data;
  }
}

export default DepartmentService;