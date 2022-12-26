import { useAppSelector } from "../../redux/hooks/hooks"
import styles from "./MainTodos.module.css"



const MainTodos:React.FC = () => {

    const todosList = useAppSelector(state => state.todos.todos)
    return (
    <div>
        {todosList.map((todo) => {

            return (
                <div>{todo.text}</div>
            )
        })}
    </div>
    )
}


export {
    MainTodos
}