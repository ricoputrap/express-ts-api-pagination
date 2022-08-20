import departments from "../data/departments.json";
import { Department, DepartmentFilter } from "../types";

class DepartmentService {

  public getTotalDepartments(filter: DepartmentFilter): number {    
    const filterTotal: number = Object.keys(filter).length;
    if (filterTotal === 0)
      return departments.data.length;

    let filteredDepartments: Department[] = this.getFilteredDepartments(filter);
    return filteredDepartments.length;
  }

  public getDepartments(page: number, limit: number, filter: any): Department[] {
    const startIndex: number = (page - 1) * limit;
    const endIndex: number = startIndex + +limit;
    const data = departments.data.slice(startIndex, endIndex);

    return data
  }

  private getFilteredDepartments(filter: any): Department[] {
    const filterKeys: string[] = Object.keys(filter);
    const data: Department[] = departments.data;

    return data.filter((dept: any) => {
      let isIncluded: boolean = true;
      filterKeys.some((key: string) => {
        if (dept[key])
          isIncluded = dept[key] == filter[key];
        
        if (!isIncluded) return true;
      })

      return isIncluded;
    });
  }
}

export default DepartmentService;