import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    title: String,
    id: String,
    category: String,
    price: String,
    stockvalue: String

});

const product =  mongoose.model("products", productSchema);

export default product;
