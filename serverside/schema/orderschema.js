
import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    username:String,
    productname:String,
    quantity:String,
    price:String,
    totalamount:Number,
    phonenumber:String,
    
});

const orderdatas = mongoose.model("orderdatas",orderSchema);

export default orderdatas;