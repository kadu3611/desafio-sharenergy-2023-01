import express, {Router} from "express";
import userController from "../controller/user.controller";


const router = Router();

router.get("/users", userController.find);

router.get("/users/:id", userController.findById);

router.post("/users", userController.create);

router.put("/users", userController.update);

router.delete("/users/:id", userController.delete);


export default router;