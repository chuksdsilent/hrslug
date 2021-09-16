
const User = require('../model/Users');

exports.creativeCheck = async(req, res, next) => {

    const {email} = req.body;
    
    const creativeUser = await User.findOne({email}).exec();

    if(creativeUser.role !== "C") return res.status(403).json({"msg": "Unauthorized Access"});
    
    next();
    
}