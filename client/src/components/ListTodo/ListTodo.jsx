import React from 'react';
import {useEffect} from 'react';
import { getTodo } from '../../actions/actions';
import {connect} from 'react-redux'
import Todo from '../Todo/Todo'
import NewTask from '../NewTask/NewTask';

function ListTodo({getTodo, todos}) {
    useEffect(() => {
        getTodo()
    }, [getTodo])

    return (
        <div>
            <Todo todos={todos}/>
            <NewTask />
        </div>
    )
}

function mapStateToProps(state){
    return({
        todos: state.listTodos
    })
}

export default connect(mapStateToProps,{getTodo})(ListTodo)
