import Role from '../models/RoleModel.js';

const createRole = (req, res) => {
  res.status(200).send('Role created');
}
const getAllRoles = (req, res) => {
  res.status(200).send('Roles fetched: [{}{}{}]');
}

const getOneRole = (req, res) => {
  res.status(200).send('Role fetched {}');
}

const updateRole = (req, res) => {
  res.status(200).send('Role updated');
}

const deleteRole = (req, res) => {
  res.status(200).send('Role deleted');
}

export default {
  createRole,
  getAllRoles,
  getOneRole,
  updateRole,
  deleteRole
}
