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
//Add product component 
export const productAdd = async (data) =>{
  try{
       
      const result= await axios.post("http://localhost:8000/addproduct",data,{withCredentials:true});
        //console.log(result);
        return result;
  
      }
      catch(error){
          console.log(error.message);
      }
  };
  
     //get total number of order
          
  export const totalOrder = async () =>{
    try{
         
        const result= await axios.get(`http://localhost:8000/home/order`,{withCredentials:true});
      //  console.log(result)
        return result;
    
        }
        catch(error){
            console.log(error.message);
        }
    };  

     //get total number of user
          
     export const totalUser = async () =>{
      try{
           
          const result1= await axios.get(`http://localhost:8000/home/user`,{withCredentials:true});
        //  console.log(result)
          return result1;
      
          }
          catch(error){
              console.log(error.message);
          }
      };  
   //get total sales of system
          
   export const totalSales = async () =>{
    try{
         
        const result2= await axios.get(`http://localhost:8000/home/sales`,{withCredentials:true});
      //  console.log(result)
        return result2;
    
        }
        catch(error){
            console.log(error.message);
        }
    };  
 //get admin data 
          
 export const getAdmin = async () =>{
  try{
       
      const result2= await axios.get(`http://localhost:8000/setting`,{withCredentials:true});
    //  console.log(result)
      return result2;
  
      }
      catch(error){
          console.log(error.message);
      }
  };  

   //get all product  data 
          
 export const getProductAll   = async () =>{
  try{
       
      const result= await axios.get(`http://localhost:8000/productlist`,{withCredentials:true} );
    //  console.log(result)
      return result;
  
      }
      catch(error){
          console.log(error.message);
      }
  };  

  export const deleteProduct= async (id) =>{
    try{
         
        return await axios.delete(`http://localhost:8000/productlist/${id}`,{withCredentials:true});
        }
    catch(error){
        console.log(error.message);
    }
    };       

    
    