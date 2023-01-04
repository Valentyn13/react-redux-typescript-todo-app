import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks"
import styles from "./MainTodos.module.css"
import {RiEditFill} from 'react-icons/ri'
import {FaTrashAlt} from 'react-icons/fa'
import { deleteTodo, editTodo } from "../../redux/slices/todoSlice";
import { useState } from "react";
import {GiConfirmed} from 'react-icons/gi'
 export function hexToRGB(hex:string, alpha:number): string {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}



const MainTodos:React.FC = () => {
    const todosList = useAppSelector(state => state.todos.todos)
    const dispatch = useAppDispatch()
    const [newText, setNewText] = useState('')
    const [inputActive, setInputActive] = useState(false)


    const confirmNewText:React.MouseEventHandler<SVGElement> = () => {

    }
    
    return (

        <div className={styles.mainWrapper}>

                <div className={styles.todosContainer}>
                    {todosList.map((todo) => {

                        return (
                            <div className={styles.todoWrapper}
                            style={{borderColor:todo.categoryColor}}>
                                <div className={styles.title} 
                                style={{backgroundColor:hexToRGB(todo.categoryColor,0.6)}}
                                >{todo.title}</div>
                                {
                                    inputActive && (
                                    <div className={styles.reductWrapper}>
                                        <input className={styles.input} style={{backgroundColor:hexToRGB(todo.categoryColor,0.4)}} type="text" value={newText} onChange={(e) =>setNewText(e.target.value)} />
                                        <GiConfirmed className={styles.icon} onClick={() => {
                                            dispatch(editTodo({id:todo.todoId, newText}))
                                            setNewText('')
                                            setInputActive(false)
                                        }}/>
                                    </div>
                                    )
                                }
                                {
                                    !inputActive && (<p className={styles.text}>{todo.text}</p>)
                                }
                                <div className={styles.iconContainer}>
                                    <RiEditFill className={styles.todoIcons} style={{cursor:'pointer'}} onClick={() =>setInputActive(!inputActive)} />
                                    <FaTrashAlt className={styles.todoIcons} onClick={()=> dispatch(deleteTodo(todo.todoId))}
                                    style={{cursor:'pointer'}}
                                    />
                                </div>
                            </div>

                        )
                    })}
                </div>

        </div>

    )
}


export {
    MainTodos
}