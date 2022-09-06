import Cmsuser from "../schema/dbschema.js";
import Userdata from "../schema/userschema.js";
import Product from "../schema/productschema.js";
import Orderdata from "../schema/orderschema.js";
import addressdata from "../schema/addressschema.js";
import walletdata from "../schema/walletschema.js";
import bcrypt from "bcryptjs";

//register api
export const addUser = async (req, res) => {

  const { name, email, password } = req.body;
  //check filed is empty or not


  if (!name || !email || !password) {
    return res.status(422).json({ error: "plz filled the fields properly" });
  }
  //find email not present already
  try {
    const userExist = await Cmsuser.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    }

    const newUser = new Cmsuser({ name, email, password });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

//login code
export const getUser = async (req, res) => {

  const { email, password } = req.body;
  //check filed is empty or not
  if (!email || !password) {
    return res.status(422).json({ error: "plz filled the fields properly" });
  }
  //find email not present already
  try {
    const userpresent = await Cmsuser.findOne({ email: email });
    if (userpresent) {
      const isMatch = await bcrypt.compare(password, userpresent.password);
      const token = await userpresent.generateAuthToken();
      // console.log(token);
      // res.cookie("jwtoken",token);

      if (!isMatch) {
        return res.status(422).json({ error: "invalied crenditial" });
      } else {
        return res
          .status(201)
          .json({ message: "user signin successfully", token });
      }
    } else {
      return res.status(422).json({ error: "invalied crenditial" });
    }
  } catch (error) {
    console.log(error);
  }
};

//user__Data
export const getAll = async (req, res) => {

  // console.log("token",req.token,"user-->",req.rootUser,"userId--->",req.userID);

  try {
    const users = await Userdata.find();
    // console.log(users);
    res.status(201).json(users);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

//order__Data
export const getOrder = async (req, res) => {
  try {
    const orders = await Orderdata.find();
    console.log(orders);
    res.status(201).json(orders);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
//order__Data
export const getOrderData = async (req, res) => {
  try {
    const orders = await Orderdata.findById(req.params.id);
    console.log(orders);
    res.status(201).json(orders);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
//add product api
export const addProduct = async (req, res) => {
  const { pname, ptitle, pid, pcategory, price, pstockvalue } = req.body;
  //check filed is empty or not
  console.log(pname, ptitle, pid, pcategory, price, pstockvalue);
  if (!pname || !ptitle || !pid || !pcategory || !price || !pstockvalue) {
    return res.status(422).json({ error: "plz filled the fields properly" });
  }
  //find email not present already
  try {
    const newProduct = new Product({
      name: pname,
      title: ptitle,
      id: pid,
      category: pcategory,
      price: price,
      stockvalue: pstockvalue,
    });
    console.log(newProduct);

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

//adminData
export const getAdmin = async (req, res) => {
  try {
    const users = await Cmsuser.find();
    console.log(users);
    res.status(201).json(users);
  } catch (error) {
    res.status(401).json({ message: error.message });
  } 
};


//add address data
export const addAddress = async (req, res) => {
    const { name,phone,address, city, state, country, addedBy } = req.body;
    //check filed is empty or not
  
    if (!name || !phone || !address || !city || !state || !country) {
      return res.status(422).json({ error: "plz filled the fields properly" });
    }

    
    try {
      
      const newAddress = new addressdata({ name, phone, address, city, state, country, addedBy });
  
      await newAddress.save();
      res.status(201).json(newAddress);
    } catch (error) {
      console.log(error);
    }
  };

//allAddressData
export const getAddress = async (req, res) => {

    try {
      const address = await addressdata.find().populate('addedBy');

      console.log(address);
      res.status(201).json(address);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };


//addressDetailData
export const getAddressDetail = async (req, res) => {
  try {
    const addressDetailData = await addressdata.findById(req.params.id).populate('addedBy');
    console.log(addressDetailData);
    res.status(201).json(addressDetailData);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }

};

//edit address
export const EditAddress = async (req, res) => {
    const address1 = req.body;
  const id = req.params.id;
    try {
    const address2 = await addressdata.findByIdAndUpdate(id, address1);
    res.status(201).json(address2);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const DeleteAddress = async (req, res) => {
  try {
    const address = await addressdata.deleteOne({ _id: req.params.id });
    res.status(201).json(address);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};



//order__Data
export const totalOrder = async (req, res) => {

    try {
        const orders = await Orderdata.find().countDocuments();
        // console.log(orders);
        res.status(201).json(orders);
    }
    catch (error) { res.status(401).json({ message: error.message }) };
};

//order__Data
export const totalUser = async (req, res) => {

    try {
        const users = await Userdata.find().countDocuments();
        //console.log(users);
        res.status(201).json(users);
    }
    catch (error) { res.status(401).json({ message: error.message }) };
};

//total_sales__Data
export const totalSales = async (req, res) => {

    try {
        const sales = await Orderdata.aggregate([{ $group: { _id: null, sum_val: { $sum: "$totalamount" } } }])
       // console.log(sales);
        res.status(201).json(sales);
    }
    catch (error) { res.status(401).json({ message: error.message }) };
};


//add in wallet 
export const addWallet = async (req, res) => {
  
  const { transaction } = req.body;
  const id = req.params.id;


  // const editwalletdata = new Userdata(walletdata);
  // console.log(req.body,req.params.id);
  // console.log(transaction);
  // console.log(id);
  console.log("hh");
  //check filed is empty or not
  

  if (!transaction || !req.params.id ) {
    return res.status(422).json({ error: "plz filled the fields properly" });
  }
  try {
    const newTransaction =  new walletdata({ transaction:transaction,userId:id });
    const wallet1 =await Userdata.findOneAndUpdate( { _id: req.params.id } , {$inc: {wallet:transaction} } );
    //const wallet = await Userdata.findOneAndUpdate(
    //   { _id: req.params.id },
    //   {$set: req.body }
 // console.log(wallet1);
    await newTransaction.save();
    res.status(201).json(wallet1);
  } catch (error) {;
    console.log(error);
  }
  
};

//get user wallet balance
export const getWalletAmount = async (req, res) => {
  try {
    // console.log(req.params.id)
    const walletamount = await Userdata.findById({_id: req.params.id});
    // console.log(wallet);
    // const walletdata = await walletdata.aggregate([{ $group: { _id: null, sum_val: { $sum: "$transaction" } } }])
    
    // console.log(wallet);
    
    res.status(201).json(walletamount);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};


//wallet data
export const getTransaction = async (req, res) => {

  try {
    // console.log("id",req.params.id);
    const transaction = await walletdata.find({userId:req.params.id});
    // console.log(transaction);

    // console.log(transaction);
    res.status(201).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};



  

