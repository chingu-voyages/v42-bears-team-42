import Role from '../models/RoleModel.js';

const createRole = async (req, res) => {
  console.log(req.body);
  let role = new Role({
      name: req.body.name,
      hours: req.body.hours
  })
  try {
      const result = await role.save(); 
      res.status(200).json(JSON.stringify(result));
  } catch (err) {
      res.status(400).json({message: err.message});
  }
}
const getAllRoles = async (req, res) => {
  try {
      const roleArray = await Role.find().lean();
      res.status(200).json(roleArray);
  } catch (err) {
      res.status(500).json({ message: err.message})
  }
}

const getOneRole = async (req, res) => {
   let role;
    try {
        role = await Role.findOne({name: req.params.name});
        if (role == null) {
            return res.status(404).json({message: "cannot find"});
        }
    } catch (err){
        return res.status(500).json({message: err.message});
    }
  console.log(role);
  res.status(200).json(role);
}

const updateRole = async (req, res) => {
  console.log(req.body);
  let changes = {
    ...req.body
  }
  try {
    const result = await Role.updateOne({name: req.params.name}, changes);
    console.log(result);
    res.status(200).json({message: "edit succeeded"});
  } catch (err) {
      res.status(400).json({message: err.message});
  }
}

const deleteRole = async (req, res) => {
  const name = req.params.name;
  console.log(name);
  try {
    const doc = await Role.findOneAndDelete({name: name });
    console.log(doc);
    res.status(200).json(doc);
  } catch (err) {
    return res.status(404).json({message: err.message});
  }
}

export default {
  createRole,
  getAllRoles,
  getOneRole,
  updateRole,
  deleteRole
}
