import  jwt  from "jsonwebtoken";
import User from  "../schema/dbschema.js";

const Authenticate =  async (req, res, next)  => {
   
        const token = req.cookies.jwtoken;
        console.log(token);
        if(!token)
        {
            return res.sendStatus(403);
        }
    try{

       
        
        const verifyToken = jwt.verify(token, "MYNAMEISSHUBHAMDHOOTFROMJODHPURS" );
         const rootUser = await User.findOne({_id:verifyToken._id , "tokens.token" : token });
         console.log(rootUser);
         if(!rootUser){
             throw new Error("User not FOund");
         }   
            req.token = token;
            req.rootUser =rootUser;
            req.userID = rootUser._id;
            next();
    
    }
    catch (error){
            res.status(401).send("unauthorised: no token proviesd  ")
            console.log(error);
    }
}
    export default Authenticate 