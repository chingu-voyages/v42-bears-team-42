import express from 'express';
import controller from '../controllers/RoleController.js';
import protect from '../middleware/routeProtecter.js';
const router = express.Router();

router.use(protect);

router
  .route('/')
  .post(controller.createRole)
  .get(controller.getAllRoles);

router
  .route('/:name')
  .get(controller.getOneRole)
  .put(controller.updateRole)
  .delete(controller.deleteRole);

export default router;