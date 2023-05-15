// @ts-ignore
import express, {Application, NextFunction, Request, Response, urlencoded} from "express"
// @ts-ignore
import cors from "cors"
import {Schema, model} from "mongoose"

// make app instance
const app: Application = express()

// application router
import userRouter from "./app/modules/user/user.route"

// use cors
app.use(cors())
// passe data
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// home route
app.get('/api/v1/user', userRouter)

// default export
export default app;

