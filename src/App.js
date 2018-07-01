import React, { Component } from "react";
import FormSubmit from "./components/FormSubmit";
import List from "./components/List";
import HeaderComponents from "./components/HeaderComponents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [
            { id: 1, name: "Raft", complete: false},
            { id: 2, name: "The Forest", complete: false}
        ],
        message: ""
    };

    this.onChangMessage = this.onChangMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }
  onChangMessage(e){
    this.setState({message: e.target.value });
  }

  onSubmitMessage(e){
    //ป้องกันการรีโหลดหน้า
    e.preventDefault();
    let oldTodos = this.state.todos;
    let todoLength = this.state.todos.length;
    let lastId = this.state.todos[todoLength - 1].id;
    let newMessage = { 
      id: lastId + 1, name: this.state.message, 
      complete: false
    };
    oldTodos.push(newMessage);
    this.setState({todos: oldTodos});
  }


  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponents/>
        <List todos={this.state.todos} />
        <FormSubmit 
        onChangMessage = {this.onChangMessage} 
        onSubmitMessage = {this.onSubmitMessage}
        />
      </div>
    );
  }
}

export default App;