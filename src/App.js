import React, { Component } from 'react';
import In from './components/In';
import List from './components/List.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={items:[]};

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onAdd(item){
    console.log(this.state.items);
    console.log(item);
    
    if(!this.state.items.filter(e => e.item == item).length >0){
      const items = this.state.items.concat({
        item,
        key:Date.now()
      });
      this.setState({items});
    }
  }
  onDelete(name){
    const items = this.state.items.filter(item => item == name);
    this.setState({items});
  }

  render() {
    return (
      <div className="container">
        <In add={this.onAdd} />
        <List items={this.state.items} remove={this.onDelete} />
      </div>
    );
  }
}



export default App;
