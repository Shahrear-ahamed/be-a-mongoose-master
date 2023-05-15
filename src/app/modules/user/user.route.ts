// @ts-ignore
import express from "express";
import {createUserController} from "./user.controller";

const router = express.Router();

router.get("/", createUserController)

export default router