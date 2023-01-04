import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks"
import styles from "./MainTodos.module.css"
import {RiEditFill} from 'react-icons/ri'
import {FaTrashAlt} from 'react-icons/fa'
import { deleteTodo } from "../../redux/slices/todoSlice";


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
                                <p className={styles.text}>{todo.text}</p>
                                <div className={styles.iconContainer}>
                                    <RiEditFill style={{cursor:'pointer'}} />
                                    <FaTrashAlt onClick={()=> dispatch(deleteTodo(todo.todoId))}
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