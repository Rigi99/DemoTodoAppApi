import {Router} from "express";
import {getTodos, getTodoById, updateTodo, deleteTodo, addTodo} from "../controllers/todo.controller";
import {login, register} from "../controllers/authentication.controller";

export default (router: Router) => {
    router.get('/', getTodos);
    router.get('/:id', getTodoById);
    router.put('/:id', updateTodo);
    router.delete('/:id', deleteTodo);
    router.post('/', addTodo);
};
