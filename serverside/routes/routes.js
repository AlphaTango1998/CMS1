import express from "express";
import { addUser, getUser, getAll, getOrder, getOrderData,totalOrder} from "../controllers/cms_controller.js";
import Authenticate from "../middleware/authenticate.js";

const router = express.Router();
router.post('/register' , addUser );
router.post('/login',getUser);
router.get('/login_data',Authenticate, getAll);
router.get('/order_data',Authenticate, getOrder);
router.get('/order_data/:id',Authenticate, getOrderData);
router.get('/home',Authenticate, totalOrder);


export default router ;