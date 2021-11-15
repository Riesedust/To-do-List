import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/actions'
import {bindActionCreators} from 'redux'
import "./Todo.css"

function Todo(props) {
    return (props.todos.map(e =>
        <div className="individual-todo">
            <input type="checkbox"/>
            <label>{e.name}</label>
            <Link to={`/${e.id}`}>Edit</Link>
            <button  onClick={() =>props.removeTodo(e.id)}>Delete</button>
        </div>
    )
    )
}

function mapStateToProps(state){
    return({
        todos: state.listTodos
    })
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)