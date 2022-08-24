import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { productAdd } from '../service/api';
import { useCookies } from 'react-cookie';


const Addproduct = () => {
  const [cookies, setCookie] = useCookies(['user']);
  let token_value = cookies.jwtoken;
  const initial = {
    pname: '',
    ptitle: '',
    pid: '',
    pcategory: '',
    price: '',
    pstockvalue: ''

  }
  const [product, setProduct] = useState(initial);
 
  const onValueChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("product add", product);
    await productAdd(product, token_value);

  }

  return (
    <>
      <div className="row">
        <div className="col-lg-12"><Navbar /> </div>
      </div>
      <div className="row">
        <div className="col-lg-3"><Sidebar /> </div>
       </div>
        <div className="Register">
        <form onSubmit={handleSubmit} >
            <table className='Regitable'>
              <tr className='tr'>
                <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="pname" className="form-control" >Productname</input></td>
                <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="ptitle" className="form-control" >Product Title</input></td>
              </tr>
              <tr className='tr'>
                <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="pid" className="form-control" >Product Id</input></td>
                <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="pcategory" className="form-control" >Product Category</input></td>
              </tr>
              <tr className='tr'>
                <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="price" className="form-control" >Price</input></td>
                <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="pstockvalue" className="form-control" >Stockvalue</input></td>
              </tr>
            </table>
            <center>
              <input type="submit" value="Submit Here" className="btn btn-primary" />
            </center>
          </form>
        </div>
      
    </>
  )
}


export default Addproduct