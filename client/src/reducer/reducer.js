import { ADD_TODO, REMOVE_TODO, EDIT_TODO, GET_TODO } from "../actions/types";

const initialState= {
    listTodos: []
}


export default function reducer(state= initialState, action){
    switch(action.type){
        case GET_TODO:
            return{...state, listTodos: action.payload}
        case ADD_TODO:
            return{...state, listTodos: [action.payload,...state.listTodos]}
        case REMOVE_TODO:
            return{...state, listTodos: state.listTodos.filter(e => e.id !== action.payload)}
        case EDIT_TODO:
            return{...state}
        default: 
            return state
    }
}