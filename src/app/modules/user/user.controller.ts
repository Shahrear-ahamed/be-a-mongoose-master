import {Request, Response} from "express";
import {createUserToDB, getUsersController} from "./user.service";

export const createUserController = async (req: Request, res: Response) => {
    const userData = req.body;
    console.log(userData)
    const newUser = await createUserToDB(userData)

    res.status(200).json({
        status: "OK",
        message: "User are created",
        data: newUser
    })
}

export const getUserController = async (req: Request, res: Response) => {
    const getUsers = await getUsersController()

    res.status(200).json({status: "OK", message: "Everything OK", data: getUsers})
}