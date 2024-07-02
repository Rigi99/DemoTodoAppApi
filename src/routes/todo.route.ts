import {Router} from "express";
import {getTodos, getTodoById, updateTodo, deleteTodo, addTodo} from "../controllers/todo.controller";

const todoRouter = Router();

todoRouter.get('/', getTodos);
todoRouter.get('/:id', getTodoById);
todoRouter.put('/:id', updateTodo);
todoRouter.delete('/:id', deleteTodo);
todoRouter.post('/', addTodo);

export default todoRouter;
