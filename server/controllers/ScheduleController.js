import Schedule from '../models/ScheduleModel.js';

const createSchedule = async (req, res) => {
  try {
    const { dateStart, focus, days } = req.body;
    const schedule = await Schedule.create({ dateStart, focus, days });
    res.status(200).send('ScheduleTemplate created');
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const getAllSchedule = async (req, res) => {
  try {
    const scheduleArray = await Schedule.find().lean();

    res.status(200).json({ success: true, scheduleArray });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const getOneSchedule = async (req, res) => {
  res.status(200).send('ScheduleTemplate fetched {}');
}

const updateSchedule = async (req, res) => {
  res.status(200).send('ScheduleTemplate updated');
}

const deleteSchedule = async (req, res) => {
  res.status(200).send('ScheduleTemplate deleted');
}

export default {
  createSchedule,
  getAllSchedule,
  getOneSchedule,
  updateSchedule,
  deleteSchedule
}


