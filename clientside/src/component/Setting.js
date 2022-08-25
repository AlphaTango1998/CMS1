import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { getAdmin } from "../service/api";

function Setting() {
  const imagePath = "https://cdn1.vectorstock.com/i/thumb-large/18/05/businessman-or-programmer-avatar-profile-userpic-vector-7471805.jpg";
  const [userData, setAdmin] = useState({ cod: "404" });
  useEffect(() => {
    getAdminData();
  }, []);
  const getAdminData = async () => {
    const admin_data = await getAdmin();
    setAdmin(admin_data);
    console.log(admin_data);
    console.log(admin_data.data[0].fname);

import { useCookies } from 'react-cookie';
function Setting() {
  const imagePath = "https://cdn1.vectorstock.com/i/thumb-large/18/05/businessman-or-programmer-avatar-profile-userpic-vector-7471805.jpg";
  const [userData, setAdmin] = useState({ cod: "404" });
  const [cookies, setCookie] = useCookies(['user']);
  let token_value=cookies.jwtoken;
  useEffect(() => {
    getAdminData();
  }, []);

  };

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
            {/* <h3 className="text-center">Admin Details </h3> */}
            <div>
              {userData?.cod === "404" ? (
                <div className="row mt-5">

                  <div className="card text-center">
                    <div className="card-header">data not found</div>
                  </div>

              ) : (
                userData.data.map((value, id) => (
               
                  <div class="card m-5 p-5" style={{"width":" 50rem", "align-self": "center"}}>
                 <img class="card-img-top" src= {imagePath}   style={{"width": "50%" , "align-self": "center"}}alt="Card cap" /> 
                <div class="card-body row">
                  <h5 class="card-title col-sm">Name</h5>
                  {<p class="card-text col-sm"> {value.name}</p>}

                
                </div>

                <div class="card-body row">
                <h5 class="card-title col-sm">E-mail</h5>
                  {<p class="card-text col-sm"> {value.email}</p>}

                </div>  

                <div class="card-body row">
                <h5 class="card-title col-sm">Phone</h5>
                  {<p class="card-text col-sm"> {value.phone}</p>}

                </div>  

                <div class="card-body row">
                <h5 class="card-title col-sm">D.O.B.</h5>
                  {<p class="card-text col-sm"> {value.dob}</p>}

                </div>  


                 ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
