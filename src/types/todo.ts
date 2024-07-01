export type Todo = {
    id: number;
    text: string;
    done: boolean;
    status: TodoStatus;
}

export type TodoStatus = "done" | "inProgress" | "open";
