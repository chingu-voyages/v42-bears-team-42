import mongoose from 'mongoose';

const ScheduleSchema = new mongoose.Schema({
  start: {type: String, required: true},
  // employee_id: {
  //   type: mongoose.Types.ObjectId,
  //   ref: Schedule
  // },
  days: [String]
});

export default mongoose.model('Schedule', ScheduleSchema);