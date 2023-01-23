import express from 'express';
import controller from '../controllers/RoleController.js';

const router = express.Router();

router
  .route('/')
  .post(controller.createRole)
  .get(controller.getAllRoles);

router
  .route('/:id')
  .get(controller.getOneRole)
  .put(controller.updateRole)
  .delete(controller.deleteRole);

export default router;