const mongoose = require("mongoose");

const ProductDetailsSchema = mongoose.Schema({
    
    product_name: {
        type: String,
        required: true
    }, 

    qty: {
        type: String,
        required: true
    },

    product_price: {
        type: String,
        required: true
    },
   
})

module.exports = mongoose.model("productdetails", ProductDetailsSchema);