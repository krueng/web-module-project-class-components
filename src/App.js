import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import StyledApp from './styledComponents/StyledApp'

const todotask = [
  {
    task: 'Get Firewood',
    id: 1,
    completed: false
  },
  {
    task: 'Go Fishing',
    id: 2,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todotask: todotask
    }
  }
  //Clear completed tasks
  handleClear =() => {
    this.setState({
      ...this.state,
      todotask:this.state.todotask.filter(task => {
        return (!task.completed)
        
      })
    });
  }

  //Toggle completed tasks
  handleToggle =(id) => {
    this.setState({
      ...this.state,
      todotask: this.state.todotask.map(task => {
        if (task.id === id){
          return ({
            ...task, completed:!task.completed
          });
        } else{
          return task;
        }  
      })
    })
  }
  //Add task
  handleAddTask = task => {
    const newTask = {
      task: task,
      completed: false,
      id: Date.now()
    }
    this.setState({
      ...this.state,
      todotask: [...this.state.todotask, newTask]
    });
  }
  render() {
    return (
      <StyledApp>
        <div className='App'>
          <div className='header'>
            <h1>Todo List</h1>
            <TodoForm handleAddTask={this.handleAddTask}/>
          </div>
          <TodoList handleClear={this.handleClear} handleToggle={this.handleToggle} todotask={this.state.todotask}/>
        </div>
      </StyledApp>
    );
  }
}

export default App;
