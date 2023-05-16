// model
import {model, Schema} from "mongoose";
import {IMethods, IUser, UserModel} from "./user.interface";


const userSchema = new Schema<IUser, UserModel, IMethods>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    dateOfBirth: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    email: {
        type: String,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    }
})

// instance methods
userSchema.method("fullName", function fullName() {
    return this.name.firstName + " " + this.name.lastName;
});

// statics
userSchema.static("getMaleUser", async function getMaleUser() {
    return this.find({gender: "Male"});
})
userSchema.static("getFemaleUser", async function getFemaleUser() {
    return this.find({gender: "Female"});
})


// model
const User = model<IUser, UserModel>("User", userSchema)
export default User
