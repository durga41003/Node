import { EmployeeEntity } from "../entity/EmployeeEntity";
import { AppDataSource } from "../db/dbConnection";
import { Repository } from "typeorm";
import { Employee } from "../models/Employee"
export class EmployeeService {
  private static employeeRepository: Repository<EmployeeEntity>;
  constructor() {
    EmployeeService.employeeRepository= AppDataSource.getRepository(EmployeeEntity);
   // this.employeeRepository = AppDataSource.getRepository(EmployeeEntity);
  }

  static async getAllEmployees() {
    return await this.employeeRepository.find();
  }

  static async getEmployeeById(empID: number) {
    return await this.employeeRepository.findOneBy({ empID });
  }

  static async createEmployee(empID: number, firstname: string, lastname: string) {
    const employee = this.employeeRepository.create({ empID, firstname, lastname });
    // const emp = new EmployeeEntity();
    // emp.empID=empID;
    // emp.firstname=firstname;
    // emp.lastname=lastname;
    // return await this.employeeRepository.insert(emp);
    return await this.employeeRepository.save(employee);
  }

  static async updateEmployee(empID: number, firstname: string, lastname: string) {
    const employee = await this.employeeRepository.findOneBy({ empID });
    if (employee) {
      employee.firstname = firstname;
      employee.lastname = lastname;
      return await this.employeeRepository.save(employee);
    }
    return null;
  }

  static async deleteEmployee(empID: number) {
    const employee = await this.employeeRepository.findOneBy({ empID });
    if (employee) {
      await this.employeeRepository.remove(employee);
      return employee;
    }
    return null;
  }
}



// export class EmployeeService {
//   static async getAllEmployees() {
//     return await AppDataSource.query(`SELECT * FROM employee`);
// }

// static async getEmployeeById(empID: number) {
//     return await AppDataSource.query(`SELECT * FROM employee WHERE empID = ${empID}`);
// }

// static async createEmployee(firstname: string, lastname: string, empID: number) {
//     return await AppDataSource.query(`INSERT INTO employee (firstname, lastname, empID) VALUES ('${firstname}', '${lastname}', ${empID}) RETURNING *`);
// }

// static async updateEmployee(empID: number, firstname: string, lastname: string) {
//     return await AppDataSource.query(`UPDATE employee SET firstname = '${firstname}', lastname = '${lastname}' WHERE empID = ${empID} RETURNING *`);
// }

// static async deleteEmployee(empID: number) {
//     return await AppDataSource.query(`DELETE FROM employee WHERE empID = ${empID} RETURNING *`);
// }
// }
