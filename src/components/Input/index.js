import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState(state => ({
      value
    }));
  };

  handleClick() {
    this.props.inputChanged(this.state.value);
  }

  handleEnter = event => {
    if (event.keyCode === 13) {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Add a todo here..."
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.handleEnter}
        />
        <button onClick={this.handleClick}>Add Todo</button>
      </div>
    );
  }
}

export default Input;
