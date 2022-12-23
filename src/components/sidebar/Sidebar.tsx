import { CategoryInput } from '../CategoryInput/CategoryInput'
import { CategoryList } from '../CategoryList/CategoryList'
import styles from './Sidebar.module.css'

const Sidebar:React.FC = () => {

    return (
        <div className={styles.sidebar}>
            <CategoryInput/>
            <CategoryList/>
        </div>
    )
}

export {Sidebar}
