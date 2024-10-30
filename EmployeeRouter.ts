import express from 'express';
import { EmployeeService } from '../dbService/EmployeeService';
import { Employee } from '../models/Employee'
import { StatusCodes } from 'http-status-codes';

const router = express.Router();
const employeeService = new EmployeeService();

// GET all employees
router.get('/', async (req, res, next) => {
  try {
    const employees = await EmployeeService.getAllEmployees();
    res.status(StatusCodes.OK).json(employees);
  } catch (error) {
    next(error);
  }
});

//POST create a new employee
router.post('/', async (req, res, next) => {
  try {
    const { firstname, lastname, empID } = req.body;
    const newEmployee = await EmployeeService.createEmployee(firstname, lastname, empID);
    res.status(StatusCodes.CREATED).json(newEmployee);
  } catch (error) {
    next(error);
  }
});

//GET employee by empID
router.get('/:empID', async (req, res, next) => {
  try {
    const empID = parseInt(req.params.empID);
    const employee = await EmployeeService.getEmployeeById(empID);
    if (employee) {
      res.status(StatusCodes.OK).json(employee);
    } else {
      res.status(StatusCodes.NOT_FOUND).send({ message: 'Employee not found' });
    }
  } catch (error) {
    next(error);
  }
});

//PUT update employee details
router.put('/:empID', async (req, res, next) => {
  try {
    const empID = parseInt(req.params.empID);
    const { firstname, lastname } = req.body;
    const updatedEmployee = await EmployeeService.updateEmployee(empID, firstname, lastname);
    if (updatedEmployee) {
      res.status(StatusCodes.OK).json(updatedEmployee);
    } else {
      res.status(StatusCodes.NOT_FOUND).send({ message: 'Employee not found' });
    }
  } catch (error) {
    next(error);
  }
});

//DELETE an employee
router.delete('/:empID', async (req, res, next) => {
  try {
    const empID = parseInt(req.params.empID);
    const deletedEmployee = await EmployeeService.deleteEmployee(empID);
    if (deletedEmployee) {
      res.status(StatusCodes.OK).send({ message: 'Employee deleted' });
    } else {
      res.status(StatusCodes.NOT_FOUND).send({ message: 'Employee not found' });
    }
  } catch (error) {
    next(error);
  }
});
export default router;





// // GET all employees
// router.get('/', async (req, res, next) => {
//   try {
//     const employees = await EmployeeService.getAllEmployees();
//     res.status(StatusCodes.OK).json(employees);
//   } catch (error) {
//     next(error);
//   }
// });

// // POST create a new employee
// router.post('/', async (req, res, next) => {
//   router.createEmployee(req.body).then(res => {
//       res.status(StatusCodes.CREATED).json(res);
//     }).catch (err=>{
//       next(err);
//     });
//   });

// // GET employee by empID
// router.get('/:empID', async (req, res, next) => {
//   try {
//     const empID = parseInt(req.params.empID);
//     const employee = await EmployeeService.getEmployeeById(empID);
//     if (employee) {
//       res.status(StatusCodes.OK).json(employee);
//     } else {
//       res.status(StatusCodes.NOT_FOUND).send({ message: 'Employee not found' });
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// //PUT update employee details
// router.put('/:empID', async (req, res, next) => {
//   EmployeeService.updateEmployee(req.body)
//     .then(result => {
//       if (result) {
//         res.status(StatusCodes.OK).json(result);
//       } else {
//         res.status(StatusCodes.NOT_FOUND).send({ message: 'Employee not found' });
//       }
//     })
//     .catch(err => {
//       next(err);
//     });
// });

// DELETE an employee
// router.delete('/:empID', async (req, res, next) => {
//   EmployeeService.deleteEmployee(req.params.empID)
//     .then(result => {
//       if (result) {
//         res.status(StatusCodes.OK).send({ message: 'Employee deleted' });
//       } else {
//         res.status(StatusCodes.NOT_FOUND).send({ message: 'Employee not found' });
//       }
//     })
//     .catch(err => {
//       next(err);
//     });
// });

// export default router;
