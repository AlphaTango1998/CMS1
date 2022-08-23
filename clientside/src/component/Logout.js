import React,{useEffect} from 'react'
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate= useNavigate();
    const [cookies, removeCookie] = useCookies("jwtoken");
    useEffect(()=>{
        delete_cookies();
    });

    const delete_cookies = ()=>{
        removeCookie("jwtoken");
        window.location.reload(false);
        navigate('/');
    }
    
    
  return (
      <>
        
      </>  
    
  )
}

export default Logout