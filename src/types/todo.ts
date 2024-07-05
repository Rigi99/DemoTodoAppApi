export type Todo = {
    id: number;
    title: string;
    description: string;
    deadline: Date,
    status: TodoStatus;
    assignedTo: string;
}

export type TodoStatus = "done" | "inProgress" | "open";
