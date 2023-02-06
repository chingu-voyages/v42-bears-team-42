import express from 'express';
import controller from '../controllers/ScheduleController.js';
import protect from '../middleware/routeProtecter.js';
const router = express.Router();

router.use(protect);

router
    .route('/')
    .get(controller.getAllSchedules)
    .post(controller.createSchedule);

router
    .route('/:id')
    .get(controller.getOneSchedule)
    .put(controller.updateSchedule)
    .delete(controller.deleteSchedule);

export default router;