import express from 'express';
import controller from '../controllers/ScheduleGroupController.js';
import protect from '../middleware/routeProtecter.js';
const router = express.Router();

router.use(protect);

router
    .route('/')
    .get(controller.getScheduleGroups)
    .post(controller.createScheduleGroup);

router
    .route('/:_id')
    //.get(controller.getOneScheduleGroup)
    //.put(controller.updateScheduleGroup)
    //.delete(controller.deleteScheduleGroup);



export default router;