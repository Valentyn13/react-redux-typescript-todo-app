import styles from './CategoryItem.module.css'
import { Category } from '../../redux/slices/todoSlice'
import { SlSettings } from "react-icons/sl";
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { setCategorySettingsStatus } from '../../redux/slices/todoSlice';
import { CategoryDropdown } from '../CategoryDropdown/CategoryDropdown';

interface CategoryItemProps extends Category {
    children?: JSX.Element|JSX.Element[];
}
const CategoryItem:React.FC<CategoryItemProps> = ({title, id, color}) => {
    const _id = id
 const dispatch = useAppDispatch()

 const categories = useAppSelector(state =>state.todos.categories)

 const openCategorySettings:React.MouseEventHandler<SVGElement> = () => {
    dispatch(setCategorySettingsStatus( {
        id,
    }))
 }


    return (
        <div className={styles.itemWrapper}>
            <div 
            className={styles.item}
            style={{backgroundColor:color}}
            >
                <p style={{textAlign:'center'}}>{title}</p>
                <SlSettings className={styles.svgIcon} onClick={openCategorySettings}/>
            </div>
            <>
            {
                categories.map(category => {
                    console.log(category.isSettingsActive)
                    if (category.isSettingsActive === true && category.id === id) {
                        return (
                            <CategoryDropdown id={_id} title={title} color={color}/>
                        )
                    }
                })
            }
            </>

        </div>

    )
}

export {CategoryItem}