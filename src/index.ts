import express from 'express';
import {errorHandler} from "./middlewares/error.handler";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/index.route";
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json());
app.use(errorHandler);
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

//routes
app.use("/", router());

mongoose.connect("mongodb+srv://rigmanyizsombor1016:468520Zso!@backendtodoapp.zl33qyr.mongodb.net/BackendTodoApp?retryWrites=true&w=majority&appName=BackendTodoApp")
    .then(() => {
        console.log("Database Connected");
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => {
        console.log("Connection Failed");
    })
