import {Todo} from "../../types/todo";

export interface ITodoService {
    getAllTodos(): Promise<Todo[] | null>;

    getTodo(id: number): Promise<Todo | null>;

    addTodo(todo: Todo): Promise<boolean>;

    updateTodo(id: number, todo: Todo): Promise<boolean>;

    deleteTodo(id: number): Promise<boolean>;
}
