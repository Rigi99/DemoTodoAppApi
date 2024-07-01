import {Todo} from "../types/todo";
import {ITodoService} from "./interfaces/itodo.service";
import {myTodos} from "../controllers/todo.controller";

class TodoService implements ITodoService {
    getAllTodos(): Todo[] {
        return myTodos;
    }

    getTodo(id: number): Todo | null {
        const todo = myTodos.find((todo) => todo.id === id);
        return todo || null;
    }

    addTodo(todo: Todo): boolean {
        do {
            todo.id = Math.floor(Math.random() * 1000);
        } while (myTodos.some(existingTodo => existingTodo.id === todo.id));
        myTodos.push(todo);
        return true;
    }

    updateTodo(id: number, todo: Todo): boolean {
        const existingTodo = myTodos.find((todo) => todo.id === id);
        if (existingTodo) {
            existingTodo.text = todo.text;
            existingTodo.done = todo.done;
            existingTodo.status = todo.status;
            return true;
        }
        return false;
    }

    deleteTodo(id: number): boolean {
        const todoIndex = myTodos.findIndex(todo => todo.id === id);
        if (todoIndex !== -1) {
            myTodos.splice(todoIndex, 1);
            return true;
        } else {
            return false;
        }
    }
}

export default new TodoService();
