import {Router} from "express";
import {Todo} from "../types/todo";
import TodoService from "../services/todo.service";

export const myTodos: Todo[] = [];
const todoRouter = Router();

todoRouter.get('/', (_req, res) => {
    const todos = TodoService.getAllTodos()
    return res.status(200).send({data: todos});
});

todoRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(Number.isNaN(id)) {
        return res.status(500).send('Parse error!');
    }
    const todo = TodoService.getTodo(id);
    if(todo){
        return res.status(200).send({data: todo});
    }
    return res.status(404).send('Todo Not Found!');
});

todoRouter.post('/', (req, res) => {
    const success = TodoService.addTodo(req.body);
    if(success){
        return res.status(200).send('Adding Todo was successful!');
    }
    return res.status(401).send('Adding Todo failed! This Todo already exists!');
});

todoRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(Number.isNaN(id)) {
        return res.status(500).send('Parse error!');
    }
    const success = TodoService.updateTodo(id, req.body);
    if(success){
        return res.status(200).send('Updating Todo was successful!');
    }
    return res.status(401).send('Failed to update Todo!');
});

todoRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(Number.isNaN(id)) {
        return res.status(500).send('Error');
    }
    const success = TodoService.deleteTodo(id);
    if(success){
        return res.status(200).send('Todo deleted successfully!');
    }
    return res.status(401).send('Failed to delete Todo!');
});

export default todoRouter;
