import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: String,
    stockvalue: String,
    description: String

});

const Product =  mongoose.model("products", productSchema);

export default Product;
