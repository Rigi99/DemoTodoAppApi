import { Request, Response } from 'express';
import TodoService from "../services/todo.service";

export const getTodos = async (_req: Request, res: Response) => {
    try {
        const todos = await TodoService.getAllTodos();
        res.status(200).send(todos);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching todos', error });
    }
};

export const getTodoById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const todo = await TodoService.getTodo(id);
        if (!todo) {
            return res.status(404).send({ message: 'Todo not found' });
        }
        res.status(200).send(todo);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching todo', error });
    }
};

export const addTodo = async (req: Request, res: Response) => {
    try {
        const success = await TodoService.addTodo(req.body);
        if (success) {
            res.status(201).send({ message: 'Todo added successfully' });
        } else {
            res.status(500).send({ message: 'Error adding todo' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error adding todo', error });
    }
};

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const success = await TodoService.updateTodo(id, req.body);
        if (!success) {
            return res.status(404).send({ message: 'Todo not found' });
        }
        const updatedTodo = await TodoService.getTodo(id);
        res.status(200).send(updatedTodo);
    } catch (error) {
        res.status(500).send({ message: 'Error updating todo', error });
    }
};

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const success = await TodoService.deleteTodo(id);
        if (!success) {
            return res.status(404).send({ message: 'Todo not found' });
        }
        res.status(200).send({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting todo', error });
    }
};
