import jwt from 'jsonwebtoken';
import EmployeeModel from '../models/EmployeeModel.js';

// Verify token/access
export const protect = async (req, res, next) => {
  let token;

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    console.log('splitting')
    token = req.headers.authorization.split(' ')[1];
  }
  console.log('token: ', token);
  if(!token) return res.status(401).json({ success: false, message: 'Not authorized for this route' });

  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    const employee = await EmployeeModel.findById(decoded._id);
    if(!employee) return res.status(404).json({ success: false, message: 'Employee not found' });
    
    req.employee = employee;
    next();

  } catch (error) {
    return res.status(401).json({ success: false, message: 'Not authorized for this route' });
  }
}