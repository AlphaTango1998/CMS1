import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
 
  id :String,
  order: Array

});

const orderdatas = mongoose.model("orderdatas", orderSchema);

export default orderdatas;
