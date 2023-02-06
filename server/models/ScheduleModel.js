import mongoose from 'mongoose';
// focus: employee_id days: [{role}]
// focus: requirements days: [{role, qty}]
const ScheduleSchema = new mongoose.Schema({
  dateStart: Date,
  focus: String,
  days: []
});

export default mongoose.model('Schedule', ScheduleSchema);