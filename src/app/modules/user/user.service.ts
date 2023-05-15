import User from "./user.model";
import {IUser} from "./user.interface";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const sampleUser = new User(payload)

    await sampleUser.save();
    return sampleUser

}

export const getUsersController = async (): Promise<IUser[]> => {
    return User.find()
}