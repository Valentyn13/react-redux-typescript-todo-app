import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Category = {
    id: string;
    title:string;
}

type Todo = {
    categoryId: string;
    id:string;
    title: string;
    text: string;
}

type TodosState = {
    categories: Category[];
    todos: Todo[];
}

const initialState: TodosState = {
    categories:[],
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        createCategory: (state, action:PayloadAction<string>) => {
            state.categories.push({
                id: new Date().toISOString(),
                title:action.payload,
            })
            console.log(state.categories)
        }
    }
})

export const {createCategory} = todoSlice.actions
export default todoSlice.reducer;


