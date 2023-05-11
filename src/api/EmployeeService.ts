import { $api } from ".";
import { IEmployee } from "../models/Entity/IEmployee";

class EmployeeService {
  static async getEmployees(limit: number = 3, page: number = 1) {
    const employees = await $api.get<IEmployee[]>(`/employee`, {
      params: { limit, page },
    });
    return employees;
  }
}

export default EmployeeService;
