import express from 'express';
import controller from '../controllers/EmployeeController.js';
//const bcrypt = require('bcrypt')
const router = express.Router();

router
    .route('/')
    .get(controller.getAllEmployees)
    .post(controller.createEmployee);

router
    .route('/:id')
    .get(controller.getOneEmployee)
    .put(controller.updateEmployee)
    .delete(controller.deleteEmployee);

export default router;

