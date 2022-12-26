

export type CreateCategoryAction = {
    title:string;
    active:boolean;
}

export type SetSettingsStatusAction = {
    id: string;
    active?:boolean;
}

export type ChangeCategoryColor = {
    id:string;
    newColor:string;
}

export type SetTitle = {
    id:string;
    newTitle:string
}


export type DeleteAction = {
    id:string;
}


export type IUseStateType = {
    _id:string;
    title:string;
    color:string;
}
