// @ts-ignore
import express from "express";
import {createUserController, getUserByIdController, getUserController} from "./user.controller";

const router = express.Router();

router.get("/", getUserController)
router.get("/:id", getUserByIdController)
router.post("/create-user", createUserController)

export default router