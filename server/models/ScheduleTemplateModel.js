import mongoose from 'mongoose';

const ScheduleTemplateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
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

export default mongoose.model('ScheduleTemplate', ScheduleTemplateSchema);