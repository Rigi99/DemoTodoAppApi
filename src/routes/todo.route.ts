import {Router} from "express";
import {getTodos, getTodoById, updateTodo, deleteTodo, addTodo} from "../controllers/todo.controller";
import {login, register} from "../controllers/authentication.controller";

export default (router: Router) => {
    router.get('/todos', getTodos);
    router.get('/todos/:id', getTodoById);
    router.put('/todos/:id', updateTodo);
    router.delete('/todos/:id', deleteTodo);
    router.post('/todos', addTodo);
};
