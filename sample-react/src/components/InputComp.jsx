import React, { Component } from "react";

export default class InputComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: 0
    };
    this.count = 1;
  }
  componentWillMount() {
    // eslint-disable-next-line
    this.state.randomNum = Math.floor(Math.random() * 10000 + 1);
  }

  render() {
    const input = [];
    for (var i = 0; i < this.props.noOfVersions; i++) {
      input.push(
        <input
          type="text"
          key={i}
          onChange={this.props.inputChange}
          placeholder={`Value ${i}`}
          name={`input${this.state.randomNum}-v${i + 1}`}
        />
      );
    }
    this.count++;

    return <React.Fragment>{input}</React.Fragment>;
  }
}
