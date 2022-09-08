import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
 
  id :String,
  product:Array,
  category:Array,
  quantity:Array,
  price:Array,
  totalamount:Number

});

const orderdatas = mongoose.model("orderdatas", orderSchema);

export default orderdatas;
