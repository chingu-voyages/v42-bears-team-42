import mongoose from 'mongoose';
import Schedule from './ScheduleModel.js'

const ScheduleGroupSchema = new mongoose.Schema({
  start: Date,
  schedules: [{
    type: mongoose.ObjectId,
    ref: Schedule
  }]
});

export default mongoose.model('ScheduleGroup', ScheduleGroupSchema);