const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    } 
});

module.exports = mongoose.model('products', ProductSchema); 