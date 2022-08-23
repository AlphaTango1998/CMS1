import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    title: String,
    id: String,
    category: String,
    price: String,
    stockvalue: String

});

const Product =  mongoose.model("products", productSchema);

export default Product;
