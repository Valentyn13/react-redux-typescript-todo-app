import styles from './MainHeader.module.css'
import { TbDots } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { SelectItem } from '../SelectItem/SelectItem';
import { IUseStateType } from '../../types/categoryActionTypes';
import { createTodo } from '../../redux/slices/todoSlice';
import { useState } from 'react';

const MainHeader:React.FC = () => {
    const dispatch = useAppDispatch()
    const categories = useAppSelector(state =>state.todos.categories)
    const [optionsActive, setOptionActive] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<IUseStateType>({
        _id:'',
        title:'',
        color:''
    })
    const [todosText, setTodos] = useState('')


    const createTodos:React.MouseEventHandler<HTMLButtonElement> = () => {

        dispatch(createTodo({
            _id:selectedCategory._id,
            title:selectedCategory.title,
            color:selectedCategory.color,
            text:todosText
        }))   

        setTodos('')
    }



    return (
        <header className={styles.header}>
            <div className={styles.topHeader}>
                <h1>My Todos</h1>
                <TbDots className={styles.svgIcon}/>
            </div>
            <div className={styles.workArea}>
                <div className={styles.customSelect}>
                    <div 
                    className={styles.selectButton}
                    onClick={() => setOptionActive(!optionsActive)}
                    >{ selectedCategory.title === ''? 'Select category': selectedCategory.title }</div>
                    {
                        optionsActive && (
                            <div className={styles.options}>
                            {categories.map(category => 
                            <SelectItem
                                _id={category.id}
                                title={category.title}
                                color={category.color}
                                selectCategory={setSelectedCategory}
                                optionsActive={setOptionActive}
                            />)}
                        </div>
                        )
                    }
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input value={todosText} onChange={(e) => setTodos(e.target.value)} className={styles.formInput}></input>
                    <button 
                    className={styles.formButton}
                    onClick={createTodos}
                    >save</button>
                </form>
            </div>

        </header>
    )
}



export {
    MainHeader
}