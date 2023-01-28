import Employee from '../models/EmployeeModel.js';
import EmployeeController from './EmployeeController.js';

const signUp = async (req, res, next) => {
  console.log('AuthController signup');

  req.body.permissions = 'manager';
  EmployeeController.createEmployee(req, res);
  
  /*
  *** Below may be needed in order to implement email address verification
  *** Unless we can pass a callback to EmployeeController.createEmployee to handle the email
  const { firstName, lastName, email, password } = req.body;
  const employee = await Employee.create({ 
    firstName,
    lastName,
    email,
    password,
    permissions: 'manager'
  });

  // Send email address verification
  // Email should auto-signin user once verified from clicking link/button
  */
}

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if(!email || !password) {
    res.status(400).json({ success: false, error: "Please provide valid email and password" });
  }

  try {
    const employee = await EmployeeController.getOneEmployee({ email }).select("+password");

    if(!employee) res.status(404).json({ success: false, error: "Invalid credentials" });

    const isMatch = await Employee.matchPasswords(password);

    if(!isMatch) res.status(404).json({ success: false, error: "Invalid credentials" });

    // res.status(200).json({ success: true, token: "wefwfwe" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const forgotPassword = (req, res, next) => {
  res.send(`auth.forgotPassword`);
}

const resetPassword = (req, res, next) => {
  res.send(`auth.resetPassword`);
}

export default { signUp, signIn, forgotPassword, resetPassword };