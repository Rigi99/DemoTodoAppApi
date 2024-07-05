import {Todo} from "../../types/todo";

export interface ITodoService {
    getAllTodos(assignedTo: string): Promise<Todo[] | null>;

    getTodo(id: string): Promise<Todo | null>;

    addTodo(todo: Todo): Promise<Todo | null>

    updateTodo(id: string, todo: Todo): Promise<Todo | null>;

    deleteTodo(id: string): Promise<boolean>;
}
