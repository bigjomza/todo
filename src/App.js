import React, { Component } from "react";
import FormSubmit from "./components/FormSubmit";
import List from "./components/List";
import HeaderComponents from "./components/HeaderComponents";
import Axios from "axios";

const URL = "https://bigjomza-server.herokuapp.com";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: ""
    };

    this.onChangMessage = this.onChangMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
    this.onChaneBox = this.onChaneBox.bind(this);
  }

  componentDidMount = () => {
    Axios.get("/todos").then(response => {
      this.setState({ todos: response.data });
    });
  };

  onChangMessage(e) {
    this.setState({ message: e.target.value });
  }

  onSubmitMessage(e) {
    //ป้องกันการรีโหลดหน้า
    e.preventDefault();
    Axios.post(URL + "/todos", {
      name: this.state.message,
      complete: false
    }).then(response => {
      let oldState = this.state.todos;
      oldState.push(response.data);
      this.setState({ todos: oldState });
    });
  }

  onChaneBox(index, id) {
    let check = this.state.todos[index].complete;
    Axios.patch(URL + "/todos/" + id, { complete: !check }).then(response => {
      let oldState= this.state.todos;
      oldState[index] = !check;
      this.setState({todos: oldState});
      });
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
        <HeaderComponents />
        <List todos={this.state.todos} onChaneBox={this.onChaneBox} />
        <FormSubmit
          onChangMessage={this.onChangMessage}
          onSubmitMessage={this.onSubmitMessage}
        />
      </div>
    );
  }
}

export default App;
