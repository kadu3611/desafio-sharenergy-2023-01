import express, {Router} from "express";
import userController from "../controller/user.controller";


const router = Router();

router.get("/users", userController.find);


export default router;