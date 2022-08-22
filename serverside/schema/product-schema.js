import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    title: String,
    id: String,
    category: String,
    price: String,
    stockvalue: String

});

const product =  mongoose.model("Products", productSchema);

export default product;
