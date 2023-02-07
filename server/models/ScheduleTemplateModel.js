import mongoose from 'mongoose';

const ScheduleTemplateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  focus: String,
  days: []
});

export default mongoose.model('ScheduleTemplate', ScheduleTemplateSchema);