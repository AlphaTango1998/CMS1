import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { productAdd } from '../service/api';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';



const Addproduct = () => {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(['user']);
  const navigate = useNavigate();

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
    //console.log(token_value);
    await productAdd(product, token_value);
    navigate('/home');


  }

  return (
    <>
      <div style={{ "background": "#f2edf3" }}>
        <div className="row">
          <div className="col-lg-12"><Navbar /> </div>
        </div>
        <div className="row">
          <div className="col-lg-3"><Sidebar /> </div>


          <div className="col-lg-9">

            <div className="Register">
              <form onSubmit={handleSubmit}>
                <center>
                  <h2 className='h2 '>Add Product</h2>
                  <table className='Regitable'>
                    <tbody>
                      <tr className='tr'>
                        <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="pname" className="form-control" placeholder="Productname" /></td>
                        <td className='td'>
                          <select className="form-control" onChange={(e) => onValueChange(e)} name="ptitle">
                            <option value="Title">Title</option>
                            <option value="T-shirt">T-shirt</option>
                            <option value="Shirt">Shirt</option>
                            <option value="jeans">jeans</option>
                          </select>

                        </td>
                      </tr>

                      <tr className='tr'>
                        <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="pid" className="form-control" placeholder='Product Id' /></td>
                        <td className='td'>
                          <select className="form-control" onChange={(e) => onValueChange(e)} name="pcategory">
                            <option value="Product Categories"> Categories</option>
                            <option value="Formal">Formal</option>
                            <option value="Regular">Regular</option>
                            <option value="Party wear">Party wear</option>
                          </select>

                        </td>

                      </tr>
                      <tr className='tr'>
                        <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="price" className="form-control" placeholder='Price' /></td>
                        <td className='td'><input type="text" onChange={(e) => onValueChange(e)} name="pstockvalue" className="form-control" placeholder='Stockvalue' /></td>
                      </tr>
                    </tbody>
                  </table>

                  <input type="submit" value="Submit" className="button regibutton" />
                </center>
              </form>
            </div>




          </div>
        </div>
      </div>
    </>
  )
}


export default Addproduct