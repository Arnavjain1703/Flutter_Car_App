const express = require('express');
const otpVerification =require('../controller/verification')
const router = express.Router();



router.post('/otpVerification',otpVerification.otpcheck);
router.post('/resendotp',otpVerification.resend);


module.exports = router