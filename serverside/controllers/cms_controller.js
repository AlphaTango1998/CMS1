import Cmsuser from '../schema/dbschema.js';
import Userdata from '../schema/userschema.js';
import Product from '../schema/productschema.js'
import Orderdata from '../schema/orderschema.js';
import addressdata from "../schema/addressschema.js";
import bcrypt from 'bcryptjs';


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
    const { address, city, state, country, addedBy } = req.body;
    //check filed is empty or not
  
    if (!address || !city || !state || !country) {
      return res.status(422).json({ error: "plz filled the fields properly" });
    }

    
    try {
      
      const newAddress = new addressdata({ address, city, state, country, addedBy });
  
      await newAddress.save();
      res.status(201).json(newAddress);
    } catch (error) {
      console.log(error);
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

  
  export const productlist = async (req, res) => {
    try {
      const products = await Product.find();
      //console.log(users);
      res.status(201).json(products);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };
  
  export const deleteproduct = async ( req , res ) =>{
   
    try{
         const responce = await Product.deleteOne({ id:req.params.id});
            res.status(201).json(responce);
        }
    catch(error)
        {  res.status(401).json({ message:error.message })  };
 }


 //allAddressData
export const getAddress = async (req, res) => {

    try {
      const address = await addressdata.find().populate('addedBy');

    //  console.log(address);
      res.status(201).json(address);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };

  //addressDetailData
export const getAddressDetail = async (req, res) => {
    try {
      const addressDetailData = await addressdata.findById(req.params.id).populate('addedBy');
      //console.log(addressDetailData);
      res.status(201).json(addressDetailData);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };

  //edit address
export const EditAddress = async (req, res) => {
  //  console.log("hee");
    const address = req.body;
  
    const editAddress = new addressdata(address);
    try {
      const address = await addressdata.updateOne(
        { _id: req.params.id },
        editAddress
      );
      res.status(201).json(address);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };
  //delete address
  export const DeleteAddress = async (req, res) => {
    try {
      const address = await addressdata.deleteOne({ _id: req.params.id });
      res.status(201).json(address);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };