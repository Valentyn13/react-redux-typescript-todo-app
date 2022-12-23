import { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks/hooks';
import { createCategory } from '../../redux/slices/todoSlice';
import styles from './CategoryInput.module.css'

const CategoryInput:React.FC = () => {

    const dispatch = useAppDispatch()

    const [categoryInputValue, setCategoryInputValue] = useState('');

    const addCategory:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        dispatch(createCategory(categoryInputValue))
        setCategoryInputValue('')
    }

    return (
        <div className={styles.categoriesWrapper}>
            <h1 className={styles.categoryHeader}>My Categories</h1>
            <div className={styles.formControl}>
                <form onSubmit={addCategory}>
                    <input 
                        value={categoryInputValue}
                        className={styles.styledInput} 
                        onChange={(e) => setCategoryInputValue(e.target.value)}
                        type='text'/>  
                    <button className={styles.styeldButton}>Add category</button>  
                </form>
            </div>
        </div>
    )
}


export {CategoryInput}