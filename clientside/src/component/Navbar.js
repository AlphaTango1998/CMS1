import React from 'react'
import logo from './Images/rocklee.jpg'

function Navbar() {
  const bgdata = {
    paddingLeft: "70px",
    borderRadius: "50px"
  }
  return (
    <>
      <div className="row">
        <nav className="navbar navbar-expand-lg  navbar-dark bg-success">
          <div className="col-sm-10">
            <img src={logo} style={bgdata} height="110" />
          </div>
          <div className="col-sm-2">
            <h3 className="navbar-brand " style={bgdata}>CMS Site</h3>
          </div>


        </nav>
      </div>


    </>
  )
}

export default Navbar