import Cmsuser from '../schema/dbschema.js';
import Userdata from '../schema/userschema.js';

import Orderdata from '../schema/orderschema.js';
import bcrypt from 'bcryptjs';

//register api
export const addUser = async ( req , res ) =>
{
    const {name ,email, password} = req.body;
    //check filed is empty or not
   
    if(!name || !email || !password)
    {
        return res.status(422).json({error:"plz filled the fields properly"});
    }
    //find email not present already
   try{
    const userExist =  await  Cmsuser.findOne({email:email});
   
    if(userExist)
        {
            return res.status(422).json({error:"email already exist"});
        }

        const newUser =  new Cmsuser({name,email,password});    
   

          await newUser.save();
        res.status(201).json(newUser);
   
        
   }
   catch(error){
    console.log(error);
   }
    

};



//login code
export const getUser = async ( req , res ) =>
{
    const {email, password} = req.body;
    //check filed is empty or not
    if( !email || !password)
    {
        return res.status(422).json({error:"plz filled the fields properly"});
    }
    //find email not present already
   try{
    const userpresent =  await  Cmsuser.findOne({email:email});
    if(userpresent){
    const isMatch = await bcrypt.compare(password , userpresent.password);
    const token = await userpresent.generateAuthToken();
          
        if(!isMatch)
        {
            return res.status(422).json({error:"invalied crenditial"});
        }
        else{
           return   res.status(201).json({message:"user signin successfully"});
        }
    }
    else{
        return res.status(422).json({error:"invalied crenditial"});

    }    
   }
   catch(error){
    console.log(error);
   }
    

};
//user__Data
export const getAll = async ( req , res ) =>{
    
    try{
         const users= await Userdata.find();
         console.log(users);
            res.status(201).json(users);
        }
    catch(error)
        {  res.status(401).json({ message:error.message })  };
 };
 
 //order__Data
 export const getOrder = async ( req , res ) =>{
    
    try{
         const orders= await Orderdata.find();
         console.log(orders);
            res.status(201).json(orders);
        }
    catch(error)
        {  res.status(401).json({ message:error.message })  };
 };
 //order__Data
 export const  getOrderData = async ( req , res ) =>{
    
    try{
         const orders= await Orderdata.findById(req.params.id);
         console.log(orders);
            res.status(201).json(orders);
        }
    catch(error)
        {  res.status(401).json({ message:error.message })  };
 };
