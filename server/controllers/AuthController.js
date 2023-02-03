import Employee from "../models/EmployeeModel.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

// TODO: Confirm res status codes
const signUp = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const dupEmail = await Employee.findOne({ email });
  if (dupEmail) {
    return res.status(400).json({
      success: false,
      error: "Email address already in use or waiting for account verification",
    });
  }

  const employee = await Employee.create({
    firstName,
    lastName,
    email,
    password,
    permissions: "manager",
  });

  // This needs to be tested. Is there an error to send here?
  if (!employee) return res.status(500).json({ success: false, error: error.message });

  // Email address verification: clicking link/button in email should auto-sign in user

  res.status(201).json({ success: true, employee });
};

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: "Please provide valid email and password",
    });
  }

  try {
    const employee = await Employee.findOne({ email }).select("+password");
    if (!employee)
      return res
        .status(404)
        .json({ success: false, error: "Invalid credentials" });

    const isMatch = await employee.matchPasswords(password);
    if (!isMatch)
      return res
        .status(404)
        .json({ success: false, error: "Invalid credentials" });

    const token = employee.generateAuthToken();
    res
      .status(200)
      .json({ success: true, employee, token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const employee = await Employee.findOne({ email });
    if (!employee)
      return res
        .status(404)
        .json({ success: false, message: "Email address not found" });

    const resetToken = employee.generateResetPasswordToken();

    await employee.save();

    // Create email
    const resetURL = `http://localhost:3000/resetpassword/${resetToken}`;
    const message = `
      <h1>Password reset requested</h1>
      <p>A password reset request was submitted, for this email address, to SAM.
      We have found your email address on file and you may reset your password by following the link below</p>
      <a href=${resetURL} clicktracking=off>${resetURL}</a>
      <p>If you didn't make this request, feel free to ignore it.</p>
    `;
    try {
      await sendEmail({
        to: employee.email,
        subject: "Password Reset",
        text: message,
      });

      res
        .status(200)
        .json({ success: true, data: "Password Reset email sent" });

    } catch (error) {
      employee.resetPasswordToken = undefined;
      employee.resetPasswordExpire = undefined;
      await employee.save();

      return res
        .status(500)
        .json({ success: false, message: "Email could not be sent" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const employee = await Employee.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!employee)
      return res
        .status(400)
        .json({ success: false, error: "Invalid Reset Token" });

    employee.password = req.body.password;
    employee.resetPasswordToken = undefined;
    employee.resetPasswordExpire = undefined;

    await employee.save();

    res
      .status(201)
      .json({ success: true, message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { signUp, signIn, forgotPassword, resetPassword };
