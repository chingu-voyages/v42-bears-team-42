import express from 'express';
import { getAllEmployees, createEmployee, getOneEmployee, updateEmployee, deleteEmployee } from '../controllers/EmployeeController.js';
import protect from '../middleware/routeProtecter.js';
const router = express.Router();

router.use(protect);

router
    .route('/')
    .get(getAllEmployees)
    .post(createEmployee);

router
    .route('/:_id')
    .get(getOneEmployee)
    .put(updateEmployee)
    .delete(deleteEmployee);

export default router;

