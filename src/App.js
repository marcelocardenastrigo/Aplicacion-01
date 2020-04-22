import React, {Component} from 'react';
import './App.css'; 
import tasks from './sample/task.json'
import Tasks from './components/Tasks.js'
console.log(tasks);
class App extends Component{
  state = {
    tasks:tasks
  }
  render(){
   return <div>
     <Tasks tasks={this.state.tasks}/>
      </div>
 //return <h1>Hola git</h1>
  }
}
export default App;
