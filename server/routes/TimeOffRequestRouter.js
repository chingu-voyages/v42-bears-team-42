import express from 'express';
import controller from '../controllers/TimeOffRequestController.js';
const router = express.Router();

router
    .route('/')
    .get(controller.getAllTimeOffRequests)
    .post(controller.createTimeOffRequest);

router
    .route('/:id')
    .get(controller.getOneTimeOffRequest)
    .put(controller.updateTimeOffRequest)
    .delete(controller.deleteTimeOffRequest);

export default router;