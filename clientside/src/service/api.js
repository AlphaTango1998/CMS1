import axios from 'axios';
//register component 
export const addUser = async (data) =>{
    try{
         
        const result= await axios.post("http://localhost:8000/register",data);
          //console.log(result);
          return result;
    
        }
        catch(error){
            console.log(error.message);
        }
    };
//login component 
export const getUser = async (data) =>{
    try{
         
        const result= await axios.post("http://localhost:8000/login",data);
      // console.log(result)
        return result;
    
        }
        catch(error){
            console.log(error.message);
        }
    };    
  //get all user data
export const getAll = async (data) =>{
        try{
             
            const result= await axios.get("http://localhost:8000/login_data" ,{withCredentials:true} );
          // console.log(result)
            return result;
        
            }
            catch(error){
                console.log(error.message);
            }
        };       
 
  //get all order data 
          
  export const getOrder = async () =>{
    try{
         
        const result= await axios.get("http://localhost:8000/order_data",{withCredentials:true});
          //console.log(result)
        return result;
    
        }
        catch(error){
            console.log(error.message);
        }
    };         
 
  //get all order data  into one order
          
  export const  getorderData = async (id) =>{
    try{
         
        const result= await axios.get(`http://localhost:8000/order_data/${id}`,{withCredentials:true});
          //console.log(result)
        return result;
    
        }
        catch(error){
            console.log(error.message);
        }
    };  
  