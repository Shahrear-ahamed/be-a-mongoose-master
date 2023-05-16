// interface
import {HydratedDocument, Model} from "mongoose";

export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}

// methods
export interface IMethods {
    fullName(): string
}

// statics
export interface UserModel extends Model<IUser, {}, IMethods> {
    getMaleUser(): Promise<HydratedDocument<IUser, IMethods>>;

    getFemaleUser(): Promise<HydratedDocument<IUser, IMethods>>;
}
