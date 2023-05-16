import {Request, Response} from "express";
import {
    createUserToDB,
    getFemaleUserService,
    getMaleUserService,
    getUserByIdService,
    getUserService
} from "./user.service";

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
    const getUsers = await getUserService()

    res.status(200).json({status: "OK", message: "Everything OK", data: getUsers})
}

export const getUserByIdController = async (req: Request, res: Response) => {
    // data id from user input
    const {id} = req.params;

    // get single data from the database
    const singleUser = await getUserByIdService(id)

    // send response after database operation
    res.status(200).json({status: "OK", message: "Everything OK", data: singleUser})
}

export const getMaleUsers = async (req: Request, res: Response) => {
    const maleUsers = await getMaleUserService()

    res.status(200).json({status: "OK", message: "Everything OK", data: maleUsers})
}


export const getFemaleUsers = async (req: Request, res: Response) => {
    const femaleUsers = await getFemaleUserService()
    res.status(200).json({status: "OK", message: "Everything OK", data: femaleUsers})
}