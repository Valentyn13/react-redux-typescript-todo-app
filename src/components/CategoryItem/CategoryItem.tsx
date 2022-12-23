import styles from './CategoryItem.module.css'
import { Category } from '../../redux/slices/todoSlice'
import { SlSettings } from "react-icons/sl";

const CategoryItem:React.FC<Category> = ({title, id}) => {

    return (
        <div className={styles.itemWrapper}>
            <div className={styles.item}>
                <p>{title}</p>
                <SlSettings className={styles.svgIcon}/>
            </div>
                {/* <input className={styles.colorInput} type='color'/> */}
            
        </div>

    )
}

export {CategoryItem}