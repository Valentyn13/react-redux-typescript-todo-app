import styles from './CategoryDropdown.module.css'
import { useAppDispatch } from '../../redux/hooks/hooks'
import { setCategorySettingsStatus } from '../../redux/slices/todoSlice'
import { changeCategoryColor } from '../../redux/slices/todoSlice'
import { setCategoryTitle } from '../../redux/slices/todoSlice'
import { deleteCategory } from '../../redux/slices/todoSlice'
import { hexToRGB } from '../MainTodos/MainTodos'
import {useState} from 'react'

type DropdownProps = {
    id:string;
    title:string;
    color:string;
}

const CategoryDropdown:React.FC<DropdownProps> = ({id,title,color}) => {
    // const {id} = props
    const dispatch = useAppDispatch()

    const [reductValue, setReductValue] = useState(title)
    const [newColor, setColor] = useState(color)


    const saveCategorySettings:React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(changeCategoryColor({
            id,
            newColor
        }))

        dispatch(setCategorySettingsStatus({
            id,
            active:false
        }))

        dispatch(setCategoryTitle({
            id,
            newTitle: reductValue,
        }))
      }

      const handleDelete:React.MouseEventHandler<HTMLButtonElement> =() => {
        dispatch(deleteCategory({
            id
        }))
        console.log('paka')
      }

    return (
        <div className={styles.wrapper}>
        <div className={styles.dropdown} style={{backgroundColor:hexToRGB(color,0.5)}}>
        <input 
        className={styles.reductInput}
        value={reductValue}
        onChange={(e)=>setReductValue(e.target.value)}
        maxLength={25}
        />
        <div className={styles.optionsWrapper}>
            <input 
            className={styles.colorInput}
            type='color'
            value={newColor}
            onChange={(e) => {
                setColor(e.target.value) // string
            }}
            />
            <div className={styles.buttonWrapper}>
            <button className={styles.saveButton} onClick={saveCategorySettings}>Save</button>
            <button 
            className={styles.deleteButton}
            onClick={handleDelete}>
            Delete
            </button>
            </div>
            
        </div>
    </div>
        </div>

    )
}


export {CategoryDropdown}