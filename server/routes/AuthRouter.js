const express = require('express');
const router = express.Router();
const { signUp, signIn, forgotPassword, resetPassword } = require('../controllers/AuthController');

router.route('/signup').post(signUp);
router.route('/signin').post(signIn);
router.route('/forgotpassword').post(forgotPassword);
router.route('/resetpassword/:resetToken').put(resetPassword);

module.exports = router;