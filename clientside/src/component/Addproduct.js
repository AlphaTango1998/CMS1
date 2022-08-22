import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'



const Addproduct = () => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [id, setID] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stockvalue, setStockvalue] = useState("");


    const collectData = async () => {
        console.warn(name, title, id, category, price, stockvalue)
        let result = await fetch('http://localhost:8000/addproduct', {
            method: 'post',
            body: JSON.stringify({ name, title, id, category, price, stockvalue }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json()
        localStorage.setItem("user", JSON.stringify(result.result));
    }


    return (
        <>

            <div className="row">
                <div className="col-lg-12"><Navbar /> </div>
            </div>
            <div className="row">
                <div className="col-lg-3"><Sidebar /> </div>
                <div className="col-lg-9">

                    <div className='Register'>
                        <center>
                            <h1>Add Product</h1>
                            <table className='table1 Regitable'>
                                <tbody>
                                    <tr className='tr'>
                                        <td className='td'><input className='textbox' type="text" value={name} onChange={(e) => setName(e.target.value)} required={true} placeholder='Name' /></td>
                                        <td className='td'><input className='textbox' type="text" value={title} onChange={(e) => setTitle(e.target.value)} required={true} placeholder='Title' /></td>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'><input className='textbox' type="text" value={id} onChange={(e) => setID(e.target.value)} required={true} placeholder='ID' /></td>
                                        <td className='td'><input className='textbox' type="text" value={category} onChange={(e) => setCategory(e.target.value)} required={true} placeholder='Category' /></td>
                                    </tr>
                                    <tr className='tr'>
                                        <td className='td'><input className='textbox' type="text" value={price} onChange={(e) => setPrice(e.target.value)} required={true} placeholder='₹ Price' /></td>
                                        <td className='td'><input className='textbox' type="text" value={stockvalue} onChange={(e) => setStockvalue(e.target.value)} required={true} placeholder='Stock Value' /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className='button regibutton' onClick={collectData}>Submit</button>
                        </center>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Addproduct