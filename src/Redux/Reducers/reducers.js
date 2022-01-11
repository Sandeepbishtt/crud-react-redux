import { List_Add,List_Update,List_Delete, List_Display, List_Insert } from '../Actions/actions'

import {uniqueId} from 'lodash'

const initialState = {
  inputText :'',
  list:[],
  id:""
}

const ListReducer = (state=initialState,{type,payload}) =>{
  switch(type){
    case List_Display:
      return state.list;

      case List_Add:
        return {
          ...state,
          inputText:payload,
        }


        case List_Insert:
          console.log('state.id', state.id);
          console.log('state.inputText', state.inputText);
          if (state.inputText) {
            let data = Object.assign([], state.list);
            if (state.id) {   
              data[state.id - 1] = { id: state.id, name: state.inputText };
            } else {
              data.push({ id: uniqueId(), name: state.inputText });
            }
            return {
              ...state,
              id: '',
              list: data,
              inputText: '',
            };
          } else {
            return {
              ...state,
              list: state.list,
            };
          }
 case List_Update :
  let {name,id} = payload
   return{
     ...state,
     inputText:name,
     id
   }

   case List_Delete : 
   const updateList = state.list.filter(val => val.id !==payload)
   return {
     ...state,
     list:updateList
   }

      default:
        return state
  }
}

export default ListReducer