const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../model/Users');

router.get('/',  async(req, res) => {

    
    const {email} = req.query;
    console.log("server email", email)
    let creativeUser = await User.findOne({email}, 'email').exec();
    
    if(!creativeUser) return res.status(403).json({"msg": "Unauthorized Access"});
    res.json(creativeUser)
})

module.exports = router