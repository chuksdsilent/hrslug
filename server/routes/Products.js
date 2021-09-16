const express = require("express");
const router = express.Router();
const ProductDetails = require('../model/ProductDetails');
const { check, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const config = require('config')
const auth = require("../middleware/auth");


router.get('/',auth, async(req, res) => {

    
    try{
        const products = await ProductDetails.find({});
        return res.json(products);

    }catch(err){

        console.error(err.message);
        res.status(500).send('Server Error')
    }
});
router.post('/', [
    check("product_name", "Product Name is required").not().isEmpty(),
    check("product_price", "Product Price is required").not().isEmpty(),
    check("qty", "Quantity is required").not().isEmpty(),

],  auth, async(req, res) => {

    console.log(req.body)
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{
        const {product_name, product_price, qty} = req.body;
        
       const product = new ProductDetails({
            product_name, product_price, qty
        })

        await product.save()

        return res.json({ msg: "Product Saved"})

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})

module.exports = router