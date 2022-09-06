import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { getAll } from "../service/api";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
function Login_user() {
  const [userData, setUserData] = useState();
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  let token_value = cookies.jwtoken;
  useEffect(() => {
    getAllUser();
  }, []);
  const getAllUser = async () => {
    const user_data = await getAll(token_value);
    setUserData(user_data);

    // console.log(user_data)
    //console.log(user_data.data[0].fname)
  };

=======
import { useCookies } from "react-cookie";


function Login_user() {

    const [userData, setUserData] = useState();
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies(['user']);
    let token_value = cookies.jwtoken;
       useEffect(()=>{
        getAllUser();
       
      },[]);
    const getAllUser = async() => {
       const user_data = await getAll( token_value);
           setUserData(user_data);

  };
  
>>>>>>> 43e1e36878d26a701bc02d84a77db6db22d128a4
  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-12">
<<<<<<< HEAD
            <Navbar />{" "}
=======
            <Navbar />
>>>>>>> 43e1e36878d26a701bc02d84a77db6db22d128a4
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
<<<<<<< HEAD
            <Sidebar />{" "}
=======
            <Sidebar />
>>>>>>> 43e1e36878d26a701bc02d84a77db6db22d128a4
          </div>
          <div className="col-lg-9">
            <h3 className="text-center">Login user Details </h3>
            <div>
              {!userData ? (
                <div className="card text-center">
                  <div className="card-header">data not found</div>
                </div>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
<<<<<<< HEAD
                      <th>*</th>
=======
                      <th>S.no</th>
>>>>>>> 43e1e36878d26a701bc02d84a77db6db22d128a4
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>DOB</th>
<<<<<<< HEAD
                      <th>Wallet</th>
                    </tr>
                  </thead>
=======
                      
                    </tr>
                  </thead>
                  <tbody>
                    {userData.data.map((value, id) => (
                      <tr key={id}>
                        <td>{id + 1}</td>
                        <td> {value.fname} </td>
                        <td> {value.lname} </td>
                        <td> {value.email} </td>
                        <td> {value.phone} </td>
                        <td> {value.dob} </td>
                        </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>

/*      <div className= "row">
     <div className="col-lg-3"><Sidebar /> </div>
     <div className="col-lg-9"> 
          <h3 className="text-center">Login user Details </h3>
        <div>
    
          { !userData ? (
                     
                     <div className="card text-center">
                     <div className="card-header">
                          data not found
                     </div>                
                     </div>
>>>>>>> 43e1e36878d26a701bc02d84a77db6db22d128a4

                  <tbody>
                    {userData.data.map((value, id) => (
                      <tr key={id}>
                        <td> *</td>
                        <td> {value.fname} </td>
                        <td> {value.lname} </td>
                        <td> {value.email} </td>
                        <td> {value.phone} </td>
                        <td> {value.dob} </td>
                        <td>
                          <button className="btn btn-primary ">
                            <Link
                              to={`/Wallet/${value._id}`}
                              style={{ textDecoration: "none", color: "#fff" }}
                            >
                              Detail
                            </Link>
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
<<<<<<< HEAD
=======
      </div>
      </div>
        
            

    </div> */

>>>>>>> 43e1e36878d26a701bc02d84a77db6db22d128a4
    </>
  );
}

export default Login_user;
