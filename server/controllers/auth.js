exports.authenticateUser =  async(req, res) => {
    try{
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    }catch(error){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}