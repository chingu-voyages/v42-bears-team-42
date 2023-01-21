const Employee = require('../models/employee');

const signUp = async (req, res, next) => {
  console.log('auth controller signup');
  try {
    const { firstName, lastName, email, password } = req.body;
    const employee = await Employee.create({ firstName, lastName, email, password });
    res.status(201).json({ success: true, employee });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if(!email || !password) {
    res.status(400).json({ success: false, error: "Please provide valid email and password" });
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if(!user) res.status(404).json({ success: false, error: "Invalid credentials" });

    const isMatch = await user.matchPasswords(password);

    if(!isMatch) res.status(404).json({ success: false, error: "Invalid credentials" });

    res.status(200).json({ success: true, token: "wefwfwe" });
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