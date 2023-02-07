import Schedule from '../models/ScheduleModel.js';

const createSchedule = async (req, res) => {
  try {
    const { start, focus, days } = req.body;
    const schedule = await Schedule.create({ start: Date.parse(start), focus, days });
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
    res.status(500).json({ success: false, message: error.message });
  }
}

const getOneSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.find({ _id: req.params._id });

    if(!schedule) return res.status(404).json({ success: false, error: "Invalid Schedule _id" });
  
    res.status(200).json({ success: true, schedule });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

const updateSchedule = async (req, res) => {
  try {
    const updates = {...req.body};
    const result = Schedule.updateOne({_id: req.params._id, updates});

    res.status(200).json({ success: true, message: 'Schedule updated' });
  } catch (error) {
    res.status(404).json({ success: false, error: error.message });
  }
}

const deleteSchedule = async (req, res) => {
  res.status(200).send('Schedule deleted');
}

const getScheduleGroup = async (req, res) => {
  try {
    // TODO: Enforce regex date formats on front end, i.e. YYYY-MM-DD, MM-DD-YYYY, etc.
    const startDate = Date.parse(req.params.start);
    const schedule = await Schedule.find({ start: startDate });

    if(schedule.length === 0) return res.status(404).json({ success: false, error: "No schedules with that date" })
  
    res.status(200).json({ success: true, schedule });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export default {
  createSchedule,
  getAllSchedules,
  getOneSchedule,
  updateSchedule,
  deleteSchedule,
  getScheduleGroup
}


