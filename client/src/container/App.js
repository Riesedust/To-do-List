import ListTodo from '../components/ListTodo/ListTodo';
import {Route} from 'react-router-dom'
import './App.css';
import EditTask from '../components/EditTask/EditTask';

function App() {
  return (
    <div className="App">
      <h1>To-do List</h1>
      <Route path="/" exact component={ListTodo} />
      <Route path="/:id" exact render={({match}) =>{
        const todo= match.params.id
        return <EditTask id={todo}/>
      }} />
    </div>
  );
}

export default App;
