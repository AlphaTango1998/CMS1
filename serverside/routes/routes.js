import express from "express";
import { addUser, getUser, getAll, getOrder, getOrderData,addProduct} from "../controllers/cms_controller.js";


const router = express.Router();
router.post('/register' , addUser );
router.post('/login',getUser);
router.get('/login_data', getAll);
router.get('/order_data', getOrder);
router.get('/order_data/:id', getOrderData);
router.post('/addproduct' , addProduct );


export default router ;