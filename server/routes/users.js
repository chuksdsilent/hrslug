const express = require("express");
const router = express.Router();
const User = require('../model/Users');
const { check, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const config = require('config')

router.post('/', [
    check("first_name", "Fist Name is required").not().isEmpty(),
    check("last_name", "Last Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    check("phone", "Phone is required").not().isEmpty(),

],  async(req, res) => {

    console.log(req.body)
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{
        const {first_name, last_name, email, password, phone, user_type} = req.body;

        let user = await User.findOne({ email });
        if(user){
            return res.status(400).json({msg: "User already exist"});
        }

        user = new User({
            first_name, last_name, email, password, phone, user_type
        })

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save()

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtsecret'), {
            expiresIn: 36000000
        }, (err, token) =>{
            if(err) throw err;
            res.json({ token: token})
        })
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})

module.exports = router