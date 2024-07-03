export type Todo = {
    id: number;
    title: string;
    description: string;
    deadline: Date,
    status: TodoStatus;
}

export type TodoStatus = "done" | "inProgress" | "open";
