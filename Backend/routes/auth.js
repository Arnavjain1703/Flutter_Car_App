const express = require('express');
const {body} = require('express-validator')
const user = require('../models/user');
const authController = require('../controller/auth')
const router = express.Router();

router.post('/signup',[ 
    body('email').isEmail()
    .withMessage('Please enter valid email')
    .custom((value,{req})=>
    {
        return user.findOne({email:value}).then(userDoc =>
            {
                if(userDoc)
                {
                    return Promise.reject('Email address already exists');
                }
            })
    }).normalizeEmail(),
    body('password').trim().not().isEmpty().matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})"),
    body('name').trim().not().isEmpty()],authController.signup),
    body('contactNumber').trim().not().isEmpty().matches("/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/")

    router.post('/login',authController.login)
module.exports = router