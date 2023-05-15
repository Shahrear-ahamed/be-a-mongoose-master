import {Request, Response} from "express";
import {createUserToDB} from "./user.service";

export const createUserController = async (req: Request, res: Response) => {
    const newUser = await createUserToDB()

    res.status(200).json({
        status: "OK",
        message: "User are created"
    })
}