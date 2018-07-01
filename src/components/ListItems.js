import React, { Component } from "react";

class ListItems extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((item, index) => (
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
            <input
              onChange={() => this.props.onChaneBox(index, item.id)}
              type="checkbox"
              checked={item.complete}
            />
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default ListItems;
