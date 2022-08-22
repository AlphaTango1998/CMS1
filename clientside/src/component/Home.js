import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
function Home() {
  return (
    <>
   
      <div className="row">
        <div className="col-lg-12"><Navbar /> </div>  
      </div>
      <div className= "row">
     <div className="col-lg-3"><Sidebar /> </div>
     <div className="col-lg-9">  </div>
      </div>
  
    </>
      )
}

export default Home