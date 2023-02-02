import ScheduleTemplate from '../models/ScheduleTemplateModel.js';

const createScheduleTemplate = (req, res) => {
  res.status(200).send('ScheduleTemplate created');
}
const getAllScheduleTemplates = (req, res) => {
  res.status(200).send('ScheduleTemplates fetched: [{}{}{}]');
}

const getOneScheduleTemplate = (req, res) => {
  res.status(200).send('ScheduleTemplate fetched {}');
}

const updateScheduleTemplate = (req, res) => {
  res.status(200).send('ScheduleTemplate updated');
}

const deleteScheduleTemplate = (req, res) => {
  res.status(200).send('ScheduleTemplate deleted');
}

export default {
  createScheduleTemplate,
  getAllScheduleTemplates,
  getOneScheduleTemplate,
  updateScheduleTemplate,
  deleteScheduleTemplate
}


