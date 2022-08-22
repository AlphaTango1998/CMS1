import axios from 'axios';
//register component 
export const addUser = async (data) =>{
    try{
         
        const result= await axios.post("http://localhost:8000/register",data);
          console.log(result);
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
             
            const result= await axios.get("http://localhost:8000/login_data");
          // console.log(result)
            return result;
        
            }
            catch(error){
                console.log(error.message);
            }
        };       