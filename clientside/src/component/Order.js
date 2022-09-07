import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { getOrder } from "../service/api";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Order() {

  const [orderData, setOrderData] = useState();

  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);

  let token_value = cookies.jwtoken;


  const getAllOrder = async () => {
    const order_data = await getOrder(token_value);
    setOrderData(order_data.data);
  };

  useEffect(() => {
    getAllOrder();
  }, []);


  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-12">
            <Navbar />{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />{" "}
          </div>
          <div className="col-lg-9">
            {" "}
            <h3 className="text-center"> User Order Details </h3>
            <div>
              {!orderData ? (
                <div className="row mt-5">
                  <div className="card text-center">
                    <div className="card-header">data not found</div>
                  </div>
                </div>
              ) : (
                <div>
                  <table className="table">

                    <thead>
                      <tr>
                        <th >Sr. no</th>
                        <th >Customer</th>
                        <th >Product Name</th>
                        <th >Category</th>
                        <th >Quantity</th>
                        <th >Price</th>
                        <th >Total Amount</th>
                      </tr>
                    </thead>

                    <tbody>
                      {orderData.data.map((value, ide) =>
                        <tr key={ide}>
                          <td > {ide + 1}</td>
                          <td > {value.id}</td>
                          <td > {value.productname} </td>
                          <td > {value.category} </td>
                          <td > {value.qunatity} </td>
                          <td > {value.price} </td>
                          <td > {value.totalamount} </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Order;
