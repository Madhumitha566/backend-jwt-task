import {Router} from "express";
import { registerUser,loginUser,getuserProfile } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddlewares.js";


const router=Router()

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile',protect,getuserProfile)

export default router