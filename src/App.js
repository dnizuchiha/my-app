import React, {Component} from 'react';
import './App.css';

import tasks from './sample/tasks.json';
import Tasks from './componets/tasks';
import TaskForm from './componets/TaskForm';

class App extends Component{
  
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      id: this.state.tasks.length,
      titulo: title,
      comentario: description,
      estado: false
    }
    console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasksDelete = this.state.tasks.filter(task => task.id !== id);
    console.log(newTasksDelete);
  }

  checkTask = () => {
    
  }
  
  render(){
    
    return(
      <div>
        <TaskForm addTask = {this.addTask}/>
        <Tasks tasks = {this.state.tasks} deleteTask = {this.deleteTask}/>
      </div>
    )
  }
}

export default App;



/*function Helloworld(props){
  console.log(props);
  return(
    <div id="hello">
      <h2>{props.myText}</h2>
      <h3>{props.subtitle}</h3>
    </div>
  );
} 



class Helloworld extends React.Component{

  state = {
    show: true
  }

  toggleshow = () => {
    this.setState({show: !this.state.show})
  }
  
  render(){
    if(this.state.show ){
      return(
        <div id="hello">
          <h2>{this.props.myText}</h2>
          <h3>{this.props.subtitle}</h3>
          <button onClick = {this.toggleshow}>Cambiar estado</button>
        </div>
      )
    }else{
      return(
        <div>
          <h2>No hay elementos</h2>
          <button onClick = {this.toggleshow}>Cambiar estado</button>
        </div>
      )
    }
  }
}
//const App1 = () => <div>Este es un componente: <Helloworld/></div>;

class App extends React.Component{
  render(){
    return <div>Este es un componente: <Helloworld/></div>;
  }
}

function App() {
  return (
    <div>
      Este es un componente:
      <Helloworld myText = "holaaaaaaa 1" subtitle = "Subtitulo 1"/> 
      <Helloworld myText = "holaaaaaaa 2" subtitle = "Subtitulo 1"/> 
      <Helloworld myText = "holaaaaaaa 3" subtitle = "Subtitulo 1"/>
      <Helloworld myText = "holaaaaaaa 4" subtitle = "Subtitulo 1"/>
    </div>
  );
}
*/