import mongoose from 'mongoose';
import Schedule from './ScheduleModel.js'

const RoleRequirements = new mongoose.Schema({
  roles: [{name: String, number: number}]
});

const ScheduleGroupSchema = new mongoose.Schema({
  start: {type: String, required: true},
  schedules: [{
    type: mongoose.Types.ObjectId,
    ref: Schedule
  }],
  roleRequirements: [RoleRequirements]
});

export default mongoose.model('ScheduleGroup', ScheduleGroupSchema);