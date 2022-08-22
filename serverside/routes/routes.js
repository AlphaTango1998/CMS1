import express from "express";
import { addUser, getUser, getAll } from "../controllers/cms_controller.js";


const router = express.Router();
router.post('/register' , addUser );
router.post('/login',getUser);
router.get('/login_data', getAll);


export default router ;