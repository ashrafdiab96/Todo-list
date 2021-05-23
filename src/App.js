import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
  state = {
    items: [
      {id: 1, task: "code", description: "code todo list app"},
      {id: 3, task: "read", description: "read some articles about politics"},
    ]
  }

  deleteItem = (id) => {
    // let items = this.state.items;
    // let item = items.findIndex(i => i.id === id);
    // items.splice(item, 1);
    // this.setState({items: items});
    let items = this.state.items.filter(item => item.id !== id);
    this.setState({items: items});
  }

  addItem = (item) => {
    item.id = new Date();
    let items = this.state.items;
    items.push(item);
    this.setState({items: items});
  };
  
  render () {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  };
}

export default App;
