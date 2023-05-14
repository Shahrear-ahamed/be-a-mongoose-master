// @ts-ignore
import express, {Application, NextFunction, Request, Response, urlencoded} from "express"
// @ts-ignore
import cors from "cors"
import {Schema, model} from "mongoose"

// make app instance
const app: Application = express()

// use cors
app.use(cors())
// passe data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// interface
interface IUser {
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

const userSchema = new Schema<IUser>({
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

// model
const User = model<IUser>("User", userSchema)

// home route
app.get('/', (req: Request, res: Response) => {
    const createUser = async () => {
        const sampleUser = new User({
            id: "001",
            role: "student",
            password: "Password",
            name: {
                firstName: "Shahrear",
                middleName: "Ahamed",
                lastName: "Tarif",
            },
            gender: "male",
            email: "shahrear@gmail.com",
            contactNo: "01517821912",
            emergencyContactNo: "01303401619",
            presentAddress: "Gram",
            permanentAddress: "Shohor"
        })

        await sampleUser.save();
        console.log("User saved: ", sampleUser)
    }

    createUser()
})

// default export
export default app;

