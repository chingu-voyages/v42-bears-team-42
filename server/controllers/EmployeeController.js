import Employee from "../models/EmployeeModel.js";

const createEmployee = async (req, res) => {
  console.log(req.body);
  let employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    permissions: req.body.permissions,
    active: true,
  });
  try {
    const result = await employee.save();
    res.status(200).json({ success: true, employee });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employeeArray = await Employee.find().lean();
    res.status(200).json({ success: true, employeeArray });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getOneEmployee = async (req, res) => {
  console.log("EmployeeController getOneEmployee");
  console.log("req.params: ", req.params);
  let employee;
  try {
    employee = await Employee.findOne({ _id: req.params._id });
    if (employee == null) {
      return res.status(404).json({ message: "cannot find" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  console.log(employee);
  res.status(200).json(employee);
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOne({ _id: req.params._id });

    if (req.body.firstName) employee.firstName = req.body.firstName;
    if (req.body.lastName) employee.lastName = req.body.lastName;
    if (req.body.email) employee.email = req.body.email;
    if (req.body.password) employee.password = req.body.password;
    if (req.body.permissions) employee.permissions = req.body.permissions;
    if (req.body.active) employee.active = req.body.active;
    console.log(req.body);
    await employee.save();
    res.status(200).json({ success: true, message: "edit succeeded" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const deleteEmployee = async (req, res) => {
  const _id = req.params._id;
  try {
    const doc = await Employee.findOneAndDelete({ _id: _id });
    res.status(200).json(doc);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export {
  createEmployee,
  getAllEmployees,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
};
