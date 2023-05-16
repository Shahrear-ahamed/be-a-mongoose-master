import User from "./user.model";
import {IMethods, IUser} from "./user.interface";
import {HydratedDocument} from "mongoose";

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

// export const getMaleUserService = async (): Promise<IUser[]> => {
//     console.log("HI")
//     return User.find()
// }
export const getMaleUserService = async (): Promise<HydratedDocument<IUser, IMethods>> => {
    return User.getMaleUser();
}

export const getFemaleUserService = async (): Promise<HydratedDocument<IUser, IMethods>> => {
    return User.getFemaleUser();
}