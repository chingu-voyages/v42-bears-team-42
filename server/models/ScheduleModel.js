import mongoose from 'mongoose';
// dates covered, employee, days: [{role}]
// dates covered, requirements, days: [{role, qty}]
const ScheduleSchema = new mongoose.Schema({
    employeeWorkWeek: {
      type: [ {id: String, shifts: [String]} ],
      required: false,
      default: []
    },
    staffRequirements: {
      type: [ [{role: String, number: Number}] ],
      required: false,
      default: []
    }
});

export default mongoose.model('Schedule', ScheduleSchema);