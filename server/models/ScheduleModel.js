import mongoose from 'mongoose';
import Employee from './EmployeeModel.js'

const ScheduleSchema = new mongoose.Schema({
  start: {
    type: String,
    required: true},
  employee_id: {
    type: mongoose.Types.ObjectId,
    ref: Employee
  },
  days: [String]
});

export default mongoose.model('Schedule', ScheduleSchema);