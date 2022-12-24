import { CategoryItem } from '../CategoryItem/CategoryItem'
import styles from './CategoryList.module.css'

import { useAppSelector} from '../../redux/hooks/hooks'
const CategoryList:React.FC = () => {

    const categories = useAppSelector((state) => state.todos.categories)

    return(
        <div className={styles.list}>
            {categories.map((category) => <CategoryItem
             key={category.id} 
             title={category.title} 
             id={category.id} 
             isSettingsActive={category.isSettingsActive} 
             color={category.color}
             />)}
        </div>
    ) 

}


export {
    CategoryList
}