//const express = require('express');
import express from 'express'
const router = express.Router();
import controller from '../controllers/AuthController.js';

router.route('/signup').post(controller.signUp);
router.route('/signin').post(controller.signIn);
router.route('/forgotpassword').post(controller.forgotPassword);
router.route('/resetpassword/:resetToken').put(controller.resetPassword);

export default router;