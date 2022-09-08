import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { getorderData } from "../service/api";
import { useCookies } from "react-cookie";

function ShowOrder() {

  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  let token_value = cookies.jwtoken;

  let { id } = useParams();

  const [orderData, setData] = useState();

  useEffect(() => {
    getAllOrder();
  }, []);


  const getAllOrder = async () => {
    const order_data = await getorderData(id, token_value);
    setData(order_data.data);
  };


  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Navbar />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>

        <div className="col-lg-9">



          {!orderData ? (

            <div className="row mt-5">
              <div className="card text-center">
                <div className="card-header">data not found</div>
              </div>
            </div>
          ) : (
            <div >
              <center>
                <h3 > Order Description </h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Sub total</th>
                    </tr>


                  </thead>
                  
                  <tbody >
                  
                    {orderData.product.map((value, index) =>
                      <tr>
                        <td>{orderData.product[index]}</td>
                        <td>{orderData.category[index]}</td>
                        <td>{orderData.quantity[index]}</td>
                        <td>{orderData.price[index]}</td>
                        <td>{orderData.quantity[index] * orderData.price[index]}</td>
                      </tr>
                    )}
                    <tr>
                      <td colSpan={5}><h4>Total Amount to be paid : ₹ {orderData.totalamount}</h4></td>
                    </tr>
                    
                  </tbody>
                  
                </table>



              </center>
            </div>
          )}
        </div>
      </div>
    </>
  );

}
export default ShowOrder;