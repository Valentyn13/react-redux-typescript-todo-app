
import styles from './SelectItem.module.css'
import { IUseStateType } from '../../types/categoryActionTypes'

type SelectItemProps = {
    _id:string;
    title:string;
    color:string;
    optionsActive: (option: boolean) => void;
    selectCategory: (state:IUseStateType) => void
}

const SelectItem:React.FC<SelectItemProps> = ({_id,title, color,selectCategory,optionsActive}) => {

    return (
        <div 
        className={styles.item}
         style={{backgroundColor:color}}
        onClick={ () => {
            selectCategory({_id,title,color})
            optionsActive(false)
        }}
         >

        {title}</div>
    )
}


export {
    SelectItem
}