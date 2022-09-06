import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { getOrder } from "../service/api";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Order() {

  const [orderData, setOrderData] = useState();

  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);

  let token_value = cookies.jwtoken;
  const imgpath =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLPSwWEGlf4bXeS8c32qyuDS6W6X9QfbKXw&usqp=CAU";



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
                  {orderData.map((value, id) => (
                    <table className="table">

                      <thead>
                        <tr>
                          <th >Customer</th>
                          <th >Product Name</th>
                          <th >Category</th>
                          <th >Price</th>
                          <th >Stock Value</th>
                          <th >Description</th>
                          <th >Delete</th>
                        </tr>
                      </thead>

                      <tbody>
                        {
                          orderData.data.map((value, id) =>
                            <tr key={id}>
                              <td > {id + 1}</td>
                              <td > {value.name} </td>
                              <td > {value.category} </td>
                              <td > {value.price} </td>
                              <td > {value.stockvalue} </td>
                              <td > {value.description} </td>
                              </tr>
                          )
                        }
                      </tbody>
                    </table>
                  ))}
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
