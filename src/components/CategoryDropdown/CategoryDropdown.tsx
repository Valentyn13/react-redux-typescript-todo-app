import styles from './CategoryDropdown.module.css'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { setCategorySettingsStatus } from '../../redux/slices/todoSlice'
import { changeCategoryColor } from '../../redux/slices/todoSlice'
import { setCategoryTitle } from '../../redux/slices/todoSlice'
import {useState} from 'react'

type DropdownProps = {
    id:string;
}

const CategoryDropdown:React.FC<DropdownProps> = (props) => {
    const {id} = props

    const dispatch = useAppDispatch()

    const [reductValue, setReductValue] = useState('')
    const [color, setColor] = useState('#000000')

    const saveCategorySettings:React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(changeCategoryColor({
            id,
            newColor:color
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
    return (
        <div className={styles.dropdown}>
        <input 
        className={styles.reductInput}
        value={reductValue}
        onChange={(e)=>setReductValue(e.target.value)}
        />
        <div className={styles.optionsWrapper}>
            <input 
            className={styles.colorInput}
            type='color'
            value={color}
            onChange={(e) => {
                setColor(e.target.value) // string
            }}
            />

            <button className={styles.saveButton} onClick={saveCategorySettings}>save</button>
        </div>
    </div>
    )
}


export {CategoryDropdown}