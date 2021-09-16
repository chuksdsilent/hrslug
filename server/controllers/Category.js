const Category = require('../model/Category')
const slugify = require('slugify');
const { findOneAndUpdate } = require('../model/Users');

exports.create = async(req, res) => {
        try{
            const {name} = req.body;
            const category = await new Category({ name, slug: slugify(name)}).save();
            res.json({'msg': "Category Created"})

        }catch(err){
            res.status(400).send("Create Category Failed...")
            console.log(err)
        }
}
exports.list = async(req, res) => {
    try{
        res.json(await Category.find({}).sort({createdAt: -1})).exec()
    }catch(err){
        res.status(400).send("Getting Category Failed...")
        console.log(err)
    }
}
exports.read = async(req, res) => {
    try{
        res.json(await Category.findOne({slug: req.params.slug}))
    }catch(err){
        res.status(400).send("Create Category Failed...")
        console.log(err)
    }
}
exports.update = async(req, res) => {
    try{
        const {name} = req.body;
        res.json(await Category.findOneAndUpdate({slug: req.params.slug}, {name}, {new: true}))
    }catch(err){
        res.status(400).send("Create Category Failed...")
        console.log(err)
    }
}
exports.remove = async(req, res) => {
    try{
        const deleted = await Category.findOneAndRemove({slug: slugify(req.params.slug).toLowerCase()});
        res.json({
            msg: "Category Deleted..."
        })
    }catch(err){
        res.status(400).send("Create Category Failed...")
        console.log(err)
    }
}