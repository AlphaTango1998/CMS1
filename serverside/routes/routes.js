import express from "express";
import { addUser, getUser, getAll, getOrder, getOrderData} from "../controllers/cms_controller.js";
import Authenticate from "../middleware/authenticate.js";

const router = express.Router();
router.post('/register' , addUser );
router.post('/login',getUser);
router.get('/login_data',Authenticate, getAll);
router.get('/order_data', getOrder);
router.get('/order_data/:id', getOrderData);


export default router ;