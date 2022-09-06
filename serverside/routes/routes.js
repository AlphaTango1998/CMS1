import express from "express";

import Authenticate from "../middleware/authenticate.js";
import { addUser, getUser, getAll,getAdmin,getAddress,getAddressDetail,EditAddress,DeleteAddress, getOrder, getOrderData,addProduct,addAddress,totalOrder,totalUser,totalSales, getTransaction, addWallet,getWalletAmount} from "../controllers/cms_controller.js";





const router = express.Router();
router.post('/register' , addUser );
router.post('/login',getUser);
router.get('/login_data',Authenticate, getAll);

router.get('/order_data', getOrder);
router.get('/order_data/:id', getOrderData);
router.post('/addproduct' , addProduct );
router.get('/setting', getAdmin);
router.post('/addAddress',addAddress);
router.get('/Address',getAddress);
router.get('/AddressDetail/:id',getAddressDetail);
router.put('/EditAddress/:id',EditAddress);
router.delete('/address/:id',DeleteAddress);
router.get('/home/order',Authenticate, totalOrder);
router.get('/home/user',Authenticate, totalUser);
router.get('/home/sales',Authenticate, totalSales);
router.post('/addWallet/:id',addWallet);
router.get('/getWalletAmount/:id',getWalletAmount);
router.get('/getTransaction/:id',getTransaction);

 



export default router ;