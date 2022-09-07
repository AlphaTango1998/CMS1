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

  const [oneData, setData] = useState();

  useEffect(() => {
    getAllOrder();
  }, []);

  const getAllOrder = async () => {
    const order_data = await getorderData(id, token_value);
    setData(order_data.data);
    console.log(order_data.data);
    //  console.log(oneData.data.username)
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

          {!oneData ? (

            <div className="row mt-5">
              <div className="card text-center">
                <div className="card-header">data not found</div>
              </div>
            </div>
          ) : (
            <div>
               <h3 className="px-5 mx-5 mb-3"> Order Description </h3>

                  <table className="table">
                    <thead>
                      <tr>
                        <th>Sr. No</th>
                        <th>Product name</th>
                        <th>Category</th>
                        <th>Quanity</th>
                        <th>Price</th>
                        <th>Total amount</th>
                      </tr>
                    </thead>
                    <tbody>
                     
                        <tr key={id}>
                          <td>{id + 1}</td>
                          <td>{oneData.product}</td>
                          <td>{oneData.category}</td>
                          <td>{oneData.quantity}</td>
                          <td>{oneData.price}</td>
                          <td>{oneData.totalamount}</td>
                        </tr>
                       
                    </tbody>
                  </table>

               
            </div>
          )}
        </div>
        </div>
      </>
  );

 }
export default ShowOrder;