import {
    List_Add,List_Delete,List_Display,List_Insert,List_Update
} from '../Actions/actions.js'


export const getListData = () =>  {
return {
type:List_Display
}
}

export const setListData = () => {
return {
    type:List_Insert,
}
}

export const addListData = (payload) => {
    return {
        type:List_Add,
        payload
    }
}

export const updateListData = (payload) =>{
    return {
        type:List_Update,
        payload
    }
}

export const deleteListData = (id) =>{
    return {
        type:List_Delete,
        payload : id
    }
}