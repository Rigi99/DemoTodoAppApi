import {Todo} from "../../types/todo";

export interface ITodoService {
    getAllTodos(): Todo[] | null;

    getTodo(id: number): Todo | null;

    addTodo(todo: Todo): boolean;

    updateTodo(id: number, todo: Todo): boolean;

    deleteTodo(id: number): boolean;
}
