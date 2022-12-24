import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Category = {
    id: string;
    title:string;
    isSettingsActive:boolean;
    color: string;
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

// Reducers action types
type CreateCategoryAction = {
    title:string;
    active:boolean;
}

type SetSettingsStatusAction = {
    id: string;
    active?:boolean;
}

type ChangeCategoryColor = {
    id:string;
    newColor:string;
}

type setTitle = {
    id:string;
    newTitle:string
}
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        createCategory: (state, action:PayloadAction<CreateCategoryAction>) => {
            state.categories.push({
                id: new Date().toISOString(),
                title:action.payload.title,
                isSettingsActive:action.payload.active,
                color:'#20B2AA'
            })
        },
        setCategorySettingsStatus: (state, action:PayloadAction<SetSettingsStatusAction>) => {
            state.categories.map(category => {
                if (category.id !== action.payload.id) {
                    return category
                } 
                if (category.id === action.payload.id) {
                    return category.isSettingsActive =  !category.isSettingsActive
                    
                }
            })
        },
        changeCategoryColor: (state, action:PayloadAction<ChangeCategoryColor>) => {
            state.categories.map(category => {
                if (category.id !== action.payload.id) {
                    return category
                } 
                if (category.id === action.payload.id) {
                    return category.color =  action.payload.newColor
                }
            })
        },
        setCategoryTitle: (state, action:PayloadAction<setTitle>) => {
            state.categories.map(category => {
                if (category.id !== action.payload.id) {
                    return category
                } 
                if (category.id === action.payload.id) {
                    return category.title =  action.payload.newTitle
                }
            })
        }
    }
})

export const {createCategory, setCategorySettingsStatus, changeCategoryColor,setCategoryTitle} = todoSlice.actions
export default todoSlice.reducer;


