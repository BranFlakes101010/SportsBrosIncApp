const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productname: { type: String, required: true },
    description: { type: String, required: true },
    
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;