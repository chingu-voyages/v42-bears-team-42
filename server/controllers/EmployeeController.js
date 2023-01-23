import Employee from '../models/EmployeeModel.js';

const createEmployee = (req, res) => {
  res.status(200).send('Employee created');
}
const getAllEmployees = (req, res) => {
  res.status(200).send('Employees fetched: [{}{}{}]');
}

const getOneEmployee = (req, res) => {
  res.status(200).send('Employee fetched {}');
}

const updateEmployee = (req, res) => {
  res.status(200).send('Employee updated');
}

const deleteEmployee = (req, res) => {
  res.status(200).send('Employee deleted');
}

export default {
  createEmployee,
  getAllEmployees,
  getOneEmployee,
  updateEmployee,
  deleteEmployee
}


