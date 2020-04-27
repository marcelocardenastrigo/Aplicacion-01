import React, {Component} from 'react';
import './App.css'; 
import tasks from './sample/task.json'
//Componentes
import Tasks from './components/Tasks.js'
import TaskForm  from './components/TaskForm.js'

console.log(tasks);
class App extends Component{
  state = {
    tasks:tasks
  }
  addTask =(title, description) =>{
    console.log(title, description)
  }
  render(){
   return <div>
     <TaskForm addTask={this.addTask} />
     <Tasks tasks={this.state.tasks}/>
      </div>
 //return <h1>Hola git</h1>
  }
}
export default App;
