import Schedule from '../models/ScheduleModel.js';

const createSchedule = async (req, res) => {
  try {
    const { start, focus, days } = req.body;
    const schedule = await Schedule.create({ start, focus, days });
    res.status(200).send('Schedule created');
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const getAllSchedules = async (req, res) => {
  try {
    const scheduleArray = await Schedule.find().lean();

    res.status(200).json({ success: true, scheduleArray });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const getOneSchedule = async (req, res) => {
  const schedule = await Schedule.find({ start: req.body.start });

  res.status(200).send('Schedule fetched {}');
}

const updateSchedule = async (req, res) => {
  res.status(200).send('Schedule updated');
}

const deleteSchedule = async (req, res) => {
  res.status(200).send('Schedule deleted');
}

export default {
  createSchedule,
  getAllSchedules,
  getOneSchedule,
  updateSchedule,
  deleteSchedule
}


