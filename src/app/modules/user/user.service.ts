import User from "./user.model";
import {IUser} from "./user.interface";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const sampleUser = new User(payload)

    await sampleUser.save();
    const userName = sampleUser.fullName();
    console.log(userName)
    return sampleUser

}

export const getUserService = async (): Promise<IUser[]> => {
    return User.find()
}

export const getUserByIdService = async (payload: string): Promise<IUser | null> => {
    return User.findOne({id: payload}, {name: 1, contactNo: 1, email: 1});
}