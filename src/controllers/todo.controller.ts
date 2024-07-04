import { Request, Response } from 'express';
import TodoService from "../services/todo.service";

export const getTodos = async (_req: Request, res: Response) => {
    try {
        const todos = await TodoService.getAllTodos();
        res.status(200).send(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).send({ message: 'Error fetching todos' });
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
        console.error('Error fetching todo by ID:', error);
        res.status(500).send({ message: 'Error fetching todo' });
    }
};

export const addTodo = async (req: Request, res: Response) => {
    try {
        const todo = await TodoService.addTodo(req.body);
        if (todo) {
            res.status(201).send(todo);
        } else {
            res.status(500).send({ message: 'Error adding todo' });
        }
    } catch (error) {
        console.error('Error adding todo:', error);
        res.status(500).send({ message: 'Error adding todo' });
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
        console.error('Error updating todo:', error);
        res.status(500).send({ message: 'Error updating todo' });
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
        console.error('Error deleting todo:', error);
        res.status(500).send({ message: 'Error deleting todo' });
    }
};
