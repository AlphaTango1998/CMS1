import  jwt  from "jsonwebtoken";
//import User from  "../schema/dbschema.js";
import Cmsuser from '../schema/dbschema.js';

const Authenticate =  async (req, res, next)  => {
    try{
    const token = req.cookies.jwtoken;
    //console.log(token)
    const verifyToken =jwt.verify(token,`MYNAMEISSHUBHAMDHOOTFROMJODHPUR`);
     const rootUser = await Cmsuser.findOne({_id:verifyToken._id , "tokens.token" : token });
     if(!rootUser){
         throw new Error("User not FOund");
     }   
        req.token = token;
        req.rootUser =rootUser.name;
        req.userID = rootUser._id;
        next();

}
catch (error){
        res.status(401).send("unauthorised: no token proviesd  ")
        console.log(error);
}            
    
      
   
}
    export default Authenticate 