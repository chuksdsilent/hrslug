const express = require("express");
const router = express.Router();
const User = require('../model/Users');
const { check, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const config = require('config')
const auth = require("../middleware/auth");


router.get('/', auth, async(req, res) => {

    
    try{
        const products = await User.find({user_type:'customer'});
        return res.json(products);

    }catch(err){

        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;