// @ts-ignore
import express from "express";
import {
    createUserController,
    getFemaleUsers,
    getMaleUsers,
    getUserByIdController,
    getUserController
} from "./user.controller";

const router = express.Router();

router.get("/", getUserController)
router.get("/male", getMaleUsers)
router.get("/female", getFemaleUsers)
router.get("/:id", getUserByIdController)
router.post("/create-user", createUserController)

export default router