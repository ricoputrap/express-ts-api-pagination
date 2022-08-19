import { Express } from "express"
import DepartmentController from "./controllers/DepartmentController";

const expressApp = (app: Express) => {

  DepartmentController(app);
}

export default expressApp;