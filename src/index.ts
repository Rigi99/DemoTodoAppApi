import express from 'express';
import {errorHandler} from "./middlewares/error.handler";
import todoRouter from "./routes/todo.route"
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 3000;

//middleware
app.use(bodyParser.json());
app.use(errorHandler);

//routes
app.use("/api/todos", todoRouter);

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
