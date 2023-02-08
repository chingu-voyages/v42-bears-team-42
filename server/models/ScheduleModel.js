import mongoose from 'mongoose';
// focus: employee_id days: [{role}]
// focus: requirements days: [{role, qty}]
// use setter/getter to allow start to be set only once? It probably should be overwriteable
const ScheduleSchema = new mongoose.Schema({
  start: {type: String, required: true},
  focus: {type: String, required: true},
  days: []
});

export default mongoose.model('Schedule', ScheduleSchema);