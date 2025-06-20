import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env",
});

connectDB()
    .then(() => {
        app.listen(process.env.port || 8000, () => {
            console.log(`App is listening on ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(`Mongodb connection failed`);
    });

/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR : ", error);
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("ERROR : ", error);
        throw error;
    }
})();
*/
