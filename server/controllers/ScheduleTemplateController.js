import ScheduleTemplate from '../models/ScheduleTemplateModel.js';

const createScheduleTemplate = async (req, res) => {
  try {
    const { title, focus, days } = req.body;
    const scheduleTemplate = await ScheduleTemplate.create({ title, focus, days });
    res.status(200).json({ success: true, scheduleTemplate });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const getAllScheduleTemplates = async (req, res) => {
  try {
    const scheduleTemplateArray = await ScheduleTemplate.find().lean();

    res.status(200).json({ success: true, scheduleTemplateArray });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

const getOneScheduleTemplate = async (req, res) => {
  try {
    const scheduleTemplate = await ScheduleTemplate.find({ _id: req.params._id });

    if(!scheduleTemplate) return res.status(404).json({ success: false, error: "Invalid ScheduleTemplate _id" });
  
    res.status(200).json({ success: true, scheduleTemplate });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

const updateScheduleTemplate = async (req, res) => {
  try {
    const updates = {...req.body};
    const result = await ScheduleTemplate.updateOne({_id: req.params._id, updates});

    res.status(200).json({ success: true, message: 'ScheduleTemplate updated' });
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
}

const deleteScheduleTemplate = async (req, res) => {
  try {
    const result = await ScheduleTemplate.deleteOne({_id: req.params._id});
    res.status(200).json({ success: true, message:'ScheduleTemplate deleted' });
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
}

export default {
  createScheduleTemplate,
  getAllScheduleTemplates,
  getOneScheduleTemplate,
  updateScheduleTemplate,
  deleteScheduleTemplate
}


