const Employee = require('./EmployeeController');

// Should we do matchPasswords here, the employee controller or the employee model. Probably the model so it's just a
// matter of passing back the req.password to where the bcrypt already is.

const signUp = async (req, res, next) => {
  console.log('auth controller signup');
  // create Manager employee, send whole req to controller after adding access: manager to the req 
  // send email address verification email, which auto-logs them in once verified from clicking link/button in email

  // try {
  //   const { firstName, lastName, email, password } = req.body;
  //   const employee = await Employee.create({ firstName, lastName, email, password });
  //   res.status(201).json({ success: true, employee });
  // } catch (error) {
  //   res.status(500).json({ success: false, error: error.message });
  // }
}

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if(!email || !password) {
    res.status(400).json({ success: false, error: "Please provide valid email and password" });
  }

  try {
    const Employee = await Employee.getOneEmployee({ email }).select("+password");

    if(!Employee) res.status(404).json({ success: false, error: "Invalid credentials" });

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

module.exports = { signUp, signIn, forgotPassword, resetPassword };