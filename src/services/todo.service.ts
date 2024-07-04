import {Todo} from "../types/todo";
import {ITodoService} from "./interfaces/itodo.service";
import TodoModel from "../models/todo.model";

class TodoService implements ITodoService {
    async getAllTodos(assignedTo: string): Promise<Todo[] | null> {
        try {
            return await TodoModel.find({assignedTo: assignedTo});
        } catch (error) {
            console.error('Error fetching todos:', error);
            return null;
        }
    }

    async getTodo(id: string): Promise<Todo | null> {
        try {
            return await TodoModel.findById(id);
        } catch (error) {
            console.error(`Error fetching todo with id ${id}:`, error);
            return null;
        }
    }

    async addTodo(todo: Todo): Promise<Todo | null> {
        try {
            const newTodo = new TodoModel(todo);
            await newTodo.save();
            return await TodoModel.findById(newTodo._id);
        } catch (error) {
            console.error('Error adding todo:', error);
            return null;
        }
    }

    async updateTodo(id: string, todo: Todo): Promise<Todo | null> {
        try {
            return await TodoModel.findByIdAndUpdate(id, todo, {new: true});
        } catch (error) {
            console.error(`Error updating todo with id ${id}:`, error);
            return null;
        }
    }

    async deleteTodo(id: string): Promise<boolean> {
        try {
            const deletedTodo = await TodoModel.findByIdAndDelete(id);
            return deletedTodo != null;
        } catch (error) {
            console.error(`Error deleting todo with id ${id}:`, error);
            return false;
        }
    }
}

export default new TodoService();
