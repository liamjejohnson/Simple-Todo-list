import React, { Component } from "react";
import "./App.css";
import List from "../List";
import Input from "../Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addATodo = todo => {
    this.setState(state => ({
      todos: [...state.todos, todo]
    }));
  };

  render() {
    return (
      <div className="App">
        <Input inputChanged={this.addATodo} />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
