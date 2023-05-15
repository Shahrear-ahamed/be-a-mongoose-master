// @ts-ignore
import express from "express";
import {createUserController, getUserController} from "./user.controller";

const router = express.Router();

router.get("/", getUserController)
router.post("/create-user", createUserController)

export default router