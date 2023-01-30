import TimeOffRequest from '../models/TimeOffRequestModel.js';

const createTimeOffRequest = (req, res) => {
  res.status(200).send('TimeOffRequest created');
}
const getAllTimeOffRequests = (req, res) => {
  res.status(200).send('TimeOffRequests fetched: [{}{}{}]');
}

const getOneTimeOffRequest = (req, res) => {
  res.status(200).send('TimeOffRequest fetched {}');
}

const updateTimeOffRequest = (req, res) => {
  res.status(200).send('TimeOffRequest updated');
}

const deleteTimeOffRequest = (req, res) => {
  res.status(200).send('TimeOffRequest deleted');
}

export default {
  createTimeOffRequest,
  getAllTimeOffRequests,
  getOneTimeOffRequest,
  updateTimeOffRequest,
  deleteTimeOffRequest
}


