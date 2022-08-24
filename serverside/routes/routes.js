import express from "express";
import Authenticate from "../middleware/authenticate.js";

import { addUser, getUser, getAll, getOrder, getOrderData,addProduct} from "../controllers/cms_controller.js";



const router = express.Router();
router.post('/register' , addUser );
router.post('/login',getUser);
router.get('/login_data',Authenticate, getAll);
router.get('/order_data',Authenticate, getOrder);
router.get('/order_data/:id',Authenticate, getOrderData);
router.post('/addproduct' ,Authenticate, addProduct );


export default router ;