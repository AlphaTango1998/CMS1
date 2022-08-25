import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import About from './component/About';
import LoginUserData from './component/Login_user';
import Addproduct from './component/Addproduct';
import Order from './component/Order';
import ShowOrder from './component/ShowOrder';
import Setting from './component/Setting';
import Address from './component/Address';
import AddressDetail from './component/AddressDetail';
import EditAddress from './component/EditAddress';
import { BrowserRouter,Routes,Route }from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/home' element={< Home />}></Route>
        <Route  path='/addproduct' element={<Addproduct/>}></Route>
        <Route  path='/' element={< Login />}></Route>
        <Route  path='/loginuser' element={< LoginUserData />}></Route>
        <Route  path='/register' element={ <Register /> } > </Route>
        <Route  path='/about' element={ <About /> } > </Route>
        <Route  path='/order' element={ <Order /> } > </Route>
        <Route  path='/ShowOrder/:id' element={< ShowOrder />} > </Route>
        <Route  path='/Setting' element={< Setting />}></Route>
        <Route  path='/Address' element={< Address />}></Route>
        <Route  path='/AddressDetail/:id' element={< AddressDetail />}></Route>
        <Route  path='/EditAddress/:id' element={< EditAddress />}></Route>
        
     </Routes>
     </BrowserRouter>
 

    </>
  );
}

export default App;
