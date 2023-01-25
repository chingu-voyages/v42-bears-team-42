import Employee from '../models/EmployeeModel.js';

const createEmployee = async (req, res) => {
  console.log(req.body);
  let employee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      id: req.body.id,
      email: req.body.email,
      password: req.body.password,
      roles: req.body.roles,
      permissions: req.body.permissions
  })
  try {
      const result = await employee.save(); 
      res.status(200).json(JSON.stringify(result));
  } catch (err) {
      res.status(400).json({message: err.message});
  }
};

const getAllEmployees = async (req, res) => {
  try {
      const employeeArray = await Employee.find().lean();
      res.status(200).json(employeeArray);
  } catch (err) {
      res.status(500).json({ message: err.message})
  }
}

const getOneEmployee = async (req, res) => {
  let employee;
    try {
        employee = await Employee.findOne({id: req.params.id});
        if (employee == null) {
            return res.status(404).json({message: "cannot find"});
        }
    } catch (err){
        return res.status(500).json({message: err.message});
    }
  console.log(employee);
  res.status(200).json(employee);
}

const updateEmployee = async (req, res) => {
  res.status(200).send('Employee updated');
}

const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Employee.findOneAndDelete({id: id });
    res.status(200).json(doc);
  } catch (err) {
    return res.status(404).json({message: err.message});
  }
}

export default {
  createEmployee,
  getAllEmployees,
  getOneEmployee,
  updateEmployee,
  deleteEmployee
}


