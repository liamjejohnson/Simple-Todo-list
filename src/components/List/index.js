import React from "react";

class List extends React.Component {
  render() {
    return this.props.todos.map((todo, idx) => (
      <li key={idx}>
        {idx + 1}. {todo}
      </li>
    ));
  }
}
export default List;
