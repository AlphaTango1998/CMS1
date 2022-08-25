import express from "express";
import { addUser, getUser, getAll, getOrder,addProduct, getOrderData,totalOrder,totalUser,totalSales,getAdmin,productlist,deleteproduct} from "../controllers/cms_controller.js";
import Authenticate from "../middleware/authenticate.js";


const router = express.Router();
router.post('/register' , addUser );
router.post('/login',getUser);
router.get('/login_data',Authenticate, getAll);
router.get('/order_data',Authenticate, getOrder);
router.get('/order_data/:id',Authenticate, getOrderData);
router.post('/addproduct' ,Authenticate, addProduct );
router.get('/home/order',Authenticate, totalOrder);
router.get('/home/user',Authenticate, totalUser);
router.get('/home/sales',Authenticate, totalSales);
router.get('/setting',Authenticate, getAdmin);
router.get('/productlist',Authenticate, productlist);
router.delete('/productlist/:id',Authenticate, deleteproduct);

export default router ;