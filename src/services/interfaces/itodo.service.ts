import {Todo} from "../../types/todo";

export interface ITodoService {
    getAllTodos(): Promise<Todo[] | null>;

    getTodo(id: string): Promise<Todo | null>;

    addTodo(todo: Todo): Promise<boolean>;

    updateTodo(id: string, todo: Todo): Promise<boolean>;

    deleteTodo(id: string): Promise<boolean>;
}
