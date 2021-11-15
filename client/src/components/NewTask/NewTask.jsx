import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../../actions/actions'

function NewTask() {
    const [form, setForm]= useState({name: ""})
    const dispatch = useDispatch()


    function onSubmit(e){
        e.preventDefault()
        if(form.name===""){
            alert("Faltan datos")
        }
        else{
            dispatch(addTodo(form))
            setForm({name:""})
        }
    }

    function handleChange(e){
        setForm(prevForm => {
            const newForm = {...prevForm, [e.target.name]: e.target.value}
            return newForm
        })
    }
    return (
        <form onSubmit={onSubmit}> 
            <input type="text" placeholder="Add a new task" value={form.name} name="name" onChange={handleChange}/>
            <input type="submit" value="Add"/>
        </form>
    )
}

export default NewTask
