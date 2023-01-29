import Employee from '../models/EmployeeModel.js';
import EmployeeController from './EmployeeController.js';

// TODO: Confirm res status codes
const signUp = async (req, res, next) => {
  console.log('AuthController signUp');

  // If we don't do email address verification or send a token back, we can shorten this to the next 2 lines
  // and the dupEmail check
  // req.body.permissions = 'manager';
  // EmployeeController.createEmployee(req, res);
  
  const { firstName, lastName, email, password } = req.body;
  const dupEmail = await Employee.findOne({ email });
  if(dupEmail) {
    return res.status(400).json({ 
      success: false,
      error: "Email address already in use or waiting for account verification"
    });
  }
  
  const employee = await Employee.create({ 
    firstName,
    lastName,
    email,
    password,
    permissions: 'manager'
  });
  if(!employee) res.status(500).json({ success: false, error: error.message });
  

  // Send email address verification
  // Email should auto-signin user once verified from clicking link/button

  // Do I need to send a token here? The plan is to send signUp form submitters back to '/'
  
  res.status(201).json({ success: true, employee });
}

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if(!email || !password) {
    res.status(400).json({ success: false, error: "Please provide valid email and password" });
  }

  try {
    const employee = await Employee.findOne({ email }).select("+password");
    if(!employee) res.status(404).json({ success: false, error: "Invalid credentials" });

    const isMatch = await employee.matchPasswords(password);
    if(!isMatch) res.status(404).json({ success: false, error: "Invalid credentials" });

    const token = employee.generateAuthToken();
    res.status(200).json({ success: true, token });
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