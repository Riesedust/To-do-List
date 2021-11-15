import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect, useDispatch } from 'react-redux'
import * as actionCreators from '../../actions/actions'
import { editTodo } from '../../actions/actions'
import {bindActionCreators} from 'redux'
const URL= "http://localhost:3001/todo"


function EditTask(props) {
    const [task, setTask] = useState()
    const [form, setForm]= useState({name: ""})//el id lo toma porque cuando yo apreto el boton de editar me manda a la ruta de la task especifica, y se pone
    const dispatch= useDispatch()
//si ,pero el name lo necesito como objeto pq no anda el puttttttttttttttttttt
    useEffect(() =>{
        axios.get(`${URL}/${props.id}`)
        .then((data) => {setTask(data.data)})
    },[])

    function handleChange(e){
        setForm(prevForm => {
            const newForm = {...prevForm, [e.target.name]: e.target.value}
            return newForm
        })
    }

    function onSubmit(e){
        e.preventDefault()
        if(form.name===""){
            alert("Faltan datos")
        }
        else{
            realizaredicion(form)
            setForm({name:""})
            alert("Cambios guardados correctamente")
            window.location.replace('/')
        }
    }

    function realizaredicion(formm){

        dispatch(editTodo(props.id, formm))
    }

    return (
        task?
        <form onSubmit={onSubmit}>
            <h4>Edit task "{task.name}"</h4>
            <input type="text" placeholder="Set new task" value={form.name }name="name" onChange={handleChange}/>
            <input type="submit" name="Save"/>
            <Link to="/">Cancel</Link>
        </form>:

        <h1>Loading...</h1>
    )
}

function mapStateToProps(state){
    return({

    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EditTask)
