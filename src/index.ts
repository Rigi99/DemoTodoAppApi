import express from 'express';
import todoRouter from "./controllers/todo.controller";
import {errorHandler} from "./middlewares/error.handler";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/todos", todoRouter);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
