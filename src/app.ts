// @ts-ignore
import express, {Application, NextFunction, Request, Response, urlencoded} from "express"
// @ts-ignore
import cors from "cors"

// make app instance
const app: Application = express()

// use cors
app.use(cors())
// passe data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// home route
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        name: "Mongoose practice home route",
        status: "OK",

    })
    next()
})

// default export
export default app;

