export type Category = {
    id: string;
    title:string;
    isSettingsActive:boolean;
    color: string;
}

export type Todo = {
    categoryId: string;
    todoId:string;
    title: string;
    text: string;
    categoryColor:string
}

export type TodosState = {
    categories: Category[];
    todos: Todo[];
}

