import express from "express";
import Authenticate from "../middleware/authenticate.js";

import { addUser, getUser, getAll, getOrder, getOrderData,addProduct} from "../controllers/cms_controller.js";



const router = express.Router();
router.post('/register' , addUser );
router.post('/login',getUser);
router.get('/login_data',Authenticate, getAll);
router.get('/order_data', getOrder);
router.get('/order_data/:id', getOrderData);
router.post('/addproduct' , addProduct );


export default router ;