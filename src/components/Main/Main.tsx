import { MainHeader } from '../MainHeader/MainHeader'
import { MainTodos } from '../MainTodos/MainTodos'
import styles from './Main.module.css'

const Main:React.FC = () => {

    return (
        <div className={styles.main}>
            <MainHeader/>
            <MainTodos/>
        </div>
    )
}


export {Main}