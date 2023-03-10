import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import { TodosState, EditTodoText } from '../../types/todoInitialStateTypes';


import { DeleteAction } from '../../types/categoryActionTypes';
import { CreateCategoryAction } from '../../types/categoryActionTypes';
import { SetSettingsStatusAction } from '../../types/categoryActionTypes';
import { ChangeCategoryColor } from '../../types/categoryActionTypes';
import { SetTitle } from '../../types/categoryActionTypes';
import {IUseStateType} from '../../types/categoryActionTypes'


// Reducers action types

interface  CreateTodoAction extends IUseStateType {
    text:string;
}
export const initialState: TodosState = {
    categories:[],
    todos: [],
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
                    state.todos.map(todo => {
                        if (todo.categoryId === action.payload.id) {
                            todo.categoryColor = action.payload.newColor
                        }
                    })
                    return category.color =  action.payload.newColor
                }

            })
        },
        setCategoryTitle: (state, action:PayloadAction<SetTitle>) => {
            state.categories.map(category => {
                if (category.id !== action.payload.id) {
                    return category
                } 
                if (category.id === action.payload.id) {
                    state.todos.map(todo => {
                        if (todo.categoryId === action.payload.id) {
                            todo.title = action.payload.newTitle
                        }
                    })
                    return category.title =  action.payload.newTitle
                }
            })
        },
        deleteCategory: (state, action:PayloadAction<DeleteAction>) => {
            state.categories =  state.categories.filter(category => category.id !== action.payload.id)
        },
        createTodo: (state, action:PayloadAction<CreateTodoAction>) => {
            state.categories.map(category => {
                if (category.id === action.payload._id) {
                    state.todos.push({
                        categoryId: action.payload._id,
                        todoId: new Date().toISOString(),
                        title: category.title,
                        text: action.payload.text,
                        categoryColor:category.color,
                    })
                }
                
            })
        },
        deleteTodo: (state, action:PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.todoId !== action.payload)
        },
        editTodo: (state, action:PayloadAction<EditTodoText>) => {
            state.todos.map(todo => {
                if(todo.todoId !== action.payload.id) {
                    return todo
                }
                if( todo.todoId === action.payload.id) {
                    return todo.text = action.payload.newText
                }
            })
        },
    }
})

export const {
    createCategory,
    setCategorySettingsStatus,
    changeCategoryColor,
    setCategoryTitle,
    deleteCategory,
    createTodo,
    deleteTodo,
    editTodo,
    } = todoSlice.actions;

export default todoSlice.reducer;


