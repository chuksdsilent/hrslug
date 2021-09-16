const express = require("express");
const router = express.Router();
const User = require('../model/Users');
const { check, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const config = require('config')
const auth = require('../middleware/auth');
const {authenticateUser} = require('../controllers/auth')


router.get('/', auth, authenticateUser)

router.post('/', [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
],  async(req, res) => {

    console.log("this is coming from", req.body)
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{
        const {email, password} = req.body;

        let user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({msg: "Invalid Email/Password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if((!isMatch)){
            return res.status(400).json({"msg": "Invalid Email/Password"})
        }
        
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtsecret'), {
            expiresIn: 36000000
        }, (err, token) =>{
            if(err) throw err;
            res.json({ token})
        })
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')
    }

});

module.exports = router;