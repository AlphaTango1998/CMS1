import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { productAdd} from '../service/api';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const Addproduct = () => {
  const [cookies, setCookie] = useCookies(['user']);
  let token_value=cookies.jwtoken;
    const initial = {
        pname: '',
        ptitle: '',
        pid: '',
        pcategory:'',
        price:'',
        pstockvalue:''
    
      }
      const [product, setProduct] = useState(initial);
      const navigate = useNavigate();
      const onValueChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
       // console.log("product add", product);
        await productAdd(product,token_value);
        navigate('/home');
    
      }
   

    return (
        <>

            <div className="row">
                <div className="col-lg-12"><Navbar /> </div>
            </div>
            <div className="row">
                <div className="col-lg-3"><Sidebar /> </div>
                <div className="col-lg-9">
                <form onSubmit={handleSubmit} >

<div className="row mt-5">
  <div className="col-lg-4"></div>
  <div className="col-lg-4">
    <label>Productname</label>
    <input type="text"
      onChange={(e) => onValueChange(e)}
      name="pname"
      className="form-control" />
  </div>
  <div className="col-lg-4"></div>
</div>

<div className="row mt-5">
  <div className="col-lg-4"></div>
  <div className="col-lg-4">
    <label>Product Title</label>
    <input type="text"
      onChange={(e) => onValueChange(e)}
      name="ptitle"
      className="form-control" />
  </div>
  <div className="col-lg-4"></div>
</div>
<div className="row mt-5">
  <div className="col-lg-4"></div>
  <div className="col-lg-4">
    <label>Product Id</label>
    <input type="text"
      onChange={(e) => onValueChange(e)}
      name="pid"
      className="form-control" />
  </div>
  <div className="col-lg-4"></div>
</div>

<div className="row mt-5">
  <div className="col-lg-4"></div>
  <div className="col-lg-4">
    <label>Product Category</label>
    <input type="text"
      onChange={(e) => onValueChange(e)}
      name="pcategory"
      className="form-control" />
  </div>
  <div className="col-lg-4"></div>
</div>

<div className="row mt-5">
  <div className="col-lg-4"></div>
  <div className="col-lg-4">
    <label>Price</label>
    <input type="text"
      onChange={(e) => onValueChange(e)}
      name="price"
      className="form-control" />
  </div>
  <div className="col-lg-4"></div>
</div>

<div className="row mt-5">
  <div className="col-lg-4"></div>
  <div className="col-lg-4">
    <label>Stockvalue</label>
    <input type="text"
      onChange={(e) => onValueChange(e)}
      name="pstockvalue"
      className="form-control" />
  </div>
  <div className="col-lg-4"></div>
</div>

<div className="row mt-3">
  <div className="col-lg-5"></div>
  <div className="col-lg-2">
    <input
      type="submit"
      value="Submit Here"
      className="btn btn-primary"
    />
  </div>
  <div className="col-lg-5"></div>
</div>

</form>
                  
                </div>
            </div>
        </>
    )
}


export default Addproduct