import React, { Component } from "react";

class ListItems extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(item => (
          <div
            style={{
              backgroundColor: "#fefefe",
              borderColor: "#ccc",
              borderWidth: 1,
              borderStyle: "solid",
              borderRadius: 5,
              margin: 2,
              padding: 5,
              paddingTop: 10,
              paddingBottom: 19
            }}
            key={item.id}
          >
            <input type="checkbox" />
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default ListItems;
