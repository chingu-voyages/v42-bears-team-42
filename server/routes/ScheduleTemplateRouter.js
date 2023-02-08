import express from 'express';
import controller from '../controllers/ScheduleTemplateController.js';
import protect from '../middleware/routeProtecter.js';
const router = express.Router();

router.use(protect);

router
    .route('/')
    .get(controller.getAllScheduleTemplates)
    .post(controller.createScheduleTemplate);

router
    .route('/:id')
    .get(controller.getOneScheduleTemplate)
    .put(controller.updateScheduleTemplate)
    .delete(controller.deleteScheduleTemplate);

export default router;