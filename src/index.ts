import app from "./app";
import mongoose from "mongoose";

const port: number = 5000


// use cors

// database connection
async function dbConnect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice')
        console.log("😍 db is connected")

        // start server
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (e) {
        console.log(`Something went wrong ${e.message}`)
    }

}

dbConnect()



