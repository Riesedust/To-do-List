import axios from 'axios'
import { ADD_TODO, GET_TODO, REMOVE_TODO } from './types'
const URL= "http://localhost:3001/todo"

export function getTodo(){
    return(dispatch) => {
        axios.get(`${URL}`)
        .then(response => {
            dispatch({
                type: GET_TODO,
                payload: response.data
            })
        })
    }
}


export function addTodo({name}){
    return async(dispatch) =>{
    await axios.post(`${URL}/add`, {name})
    .then((res) => dispatch(saveTodo(res.data)))
}  
}

export function saveTodo(data){
    return({
        type: ADD_TODO,
        payload: data
    })
}

export function removeTodo(id){
    return async (dispatch) => {
        await axios.delete(`${URL}/${id}`)
        .then(() => dispatch(saveRemove(id)))
    }
}

export function saveRemove(data){
    return({
        type: REMOVE_TODO,
        payload: data
    })
}

export function editTodo(id, formm){
    return (dispatch) =>{ 
         axios.put(`${URL}/${id}`, formm)
    }
}
//
