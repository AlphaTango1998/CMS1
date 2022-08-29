import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { deleteAddress, getAddress } from "../service/api";
import { Link } from "react-router-dom";
function Address() {
  const [addressData, setAddress] = useState();
 
  useEffect(() => {
    getAllAddress();
  
  }, []);
  const getAllAddress = async () => {
    const address_data = await getAddress();
    setAddress(address_data);
   console.log(address_data);
    //console.log(address_data.data[0].fname);
  };


  const deleteAddressDetail = async (id) =>{
    await deleteAddress(id);
    getAllAddress();
    
}

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
            <h3 className="text-center">Addresses </h3>
            <div>
              {!addressData ? (
                <div className="row mt-5">
                  <div className="card text-center">
                    <div className="card-header">data not found</div>
                  </div>
                </div>
              ) : (
                <table className="table table-bordered">
                  <thead class="thead-dark">
                    <tr>
                      <th>*</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Country</th>
                      <th>Details</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {addressData.data.map((value, id) => (
                      <tr key={id}>
                        <td> *</td>
                        <td> {value.addedBy.fname} </td>
                        <td> {value.addedBy.phone} </td>
                        <td> {value.address} </td>
                        <td> {value.city} </td>
                        <td> {value.state} </td>
                        <td> {value.country} </td>
                        <td><button className="btn btn-primary ">
                          <Link
                            to={`/AddressDetail/${value._id}`}
                            style={{ textDecoration: "none" , "color": "#fff" }}
                          >
                            see Here 
                          </Link>
                        </button>
                        </td>
                        <td><button className="btn btn-primary ">
                          <Link
                            to={`/EditAddress/${ value._id }`}
                            style={{ textDecoration: "none" , "color": "#fff" }}
                          >
                            Edit 
                          </Link>
                        </button>
                        </td>
                        <td><button className="btn btn-primary " onClick={()=>{ deleteAddressDetail(value._id)} }>
                         delete
                        </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
