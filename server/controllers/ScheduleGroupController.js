import ScheduleGroup from '../models/ScheduleGroupModel.js';

const createScheduleGroup = async (req, res) => {
  try {
    const { start, schedules, roleRequirements } = req.body;
    const scheduleGroup = await ScheduleGroup.create({ start: Date.parse(start), schedules, roleRequirements });
    res.status(200).json({scheduleGroup});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

const getScheduleGroups = async (req, res) => {
  try {
    const scheduleGroupsArray = await ScheduleGroup.find().lean()
                                .populate({path: 'schedules', populate: {path: 'employee_id'}});
    console.log(scheduleGroupsArray)
    res.status(200).json({ success: true, scheduleGroupsArray });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export default {
  createScheduleGroup,
  getScheduleGroups
}