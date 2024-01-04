import express from "express";
import { registerController } from "../controllers/signupController.js";
import { loginController } from "../controllers/loginController.js";
import { seedController } from "../controllers/seedController.js";
import { productController } from "../controllers/productController.js";
import { getProductController } from "../controllers/getProductController.js";
import {
  testController
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();
//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Seed || GET
router.get("/seed", seedController);

//Product || GET
router.get("/products", productController);

//To get Specific Product || GET
router.get("/products/:id", getProductController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
