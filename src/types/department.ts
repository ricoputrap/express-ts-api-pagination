type Department = {
  id: number;
  name: string;
  pic: string;
  supervisor: string;
  members: number;
}

type DepartmentFilter = {
  name?: string;
  pic?: string;
  supervisor?: string;
  members?: number;
}

export { DepartmentFilter }
export default Department;