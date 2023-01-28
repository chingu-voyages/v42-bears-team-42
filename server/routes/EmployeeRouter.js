import express from 'express';
import controller from '../controllers/EmployeeController.js';
const router = express.Router();

router
    .route('/')
    .get(controller.getAllEmployees)
    .post(controller.createEmployee);

router
    .route('/:_id')
    .get(controller.getOneEmployee)
    .put(controller.updateEmployee)
    .delete(controller.deleteEmployee);

export default router;

