import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
function Sidebar() {
  const bgbody = {
    minHeight: "100vh",
    minWidth: "100%",
    backgroundColor: "#EAE3D2",
    paddingLeft: "100px"

  }
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')

  }

  return (
    <>

      <div className="row">

        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block " style={bgbody}>
          <div className="position-sticky pt-3  sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink className="fs-5 text-decoration-none" to="/dashboard"> Dashboard</NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="fs-5 text-decoration-none" to="/product"> Product</NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="fs-5 text-decoration-none" to="/addproduct">Add Product</NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="fs-5 text-decoration-none" to="/order">Orders</NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="fs-5 text-decoration-none " to="/loginuser">  User</NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="fs-5 text-decoration-none" to="/setting"> Setting</NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="fs-5 text-decoration-none" to="/" onClick={logout}> logout</NavLink>
              </li>
            </ul>

          </div>
        </nav>
      </div>

    </>
  )
}

export default Sidebar