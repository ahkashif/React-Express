import React, { Component } from "react";
import DropDownComp from "./DropDownComp";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";

require("../styles/DropDown.css");

class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      selected: [""],
      value: "",
      versions: [],
      input: []
    };
    this.versionValue = [];
    this.changeValue = this.changeValue.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      items: [],
      selected: [""],
      value: "",
      versions: [],
      input: []
    });
    this.componentDidMount();
  }
  componentDidMount() {
    try {
      fetch("http://localhost:5000/api/course/")
        .then(res => res.json())
        .then(result => {
          this.setState({
            items: result,
            versions: result.map(r => {
              return r.versions;
            })
          });
        });
    } catch (error) {
      console.log(error);
    }
  }

  changeValue = (index, e) => {
    if (e.target.value === "Choose Course") {
      return;
    }

    let i = index + 1;
    // eslint-disable-next-line
    this.state.selected[i] = e.target.value;
    // eslint-disable-next-line
    this.state.input["Input_" + index] = {};
    this.setState({
      value: e.target.value
    });
  };

  reset = () => {
    this.resetState();
  };

  inputChange = (e, version, index) => {
    let count = index - 1;
    this.setState({
      input: {
        ...this.state.input,
        ["Input_" + count]: {
          ...this.state.input["Input_" + count],
          [e.target.name]: e.target.value
        }
      }
    });
  };

  submit = () => {
    let clientPostArray_1 = [];
    let clientPostArray_2 = this.state.input;
    this.state.items.map(i => {
      // eslint-disable-next-line
      this.state.selected.map(s => {
        if (i.name === s) {
          clientPostArray_1.push(i);
        }
      });
      return clientPostArray_1;
    });

    axios
      .post("/upload", { clientPostArray_1, clientPostArray_2 })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));

    this.resetState();
  };

  render() {
    return (
      <React.Fragment>
        <div className="dropdown">
          {this.state.selected.map((i, index) => {
            let v;
            this.state.items.map(it => {
              if (it.name === i) {
                v = it.id;
              }
              return v;
            });

            return (
              <DropDownComp
                key={index}
                courses={this.state.items}
                value={this.state.value}
                changeVal={e => this.changeValue(index, e)}
                version={this.state.versions[v]}
                inputChange={e =>
                  this.inputChange(e, this.state.versions[v], index)
                }
              />
            );
          })}
        </div>

        <SubmitButton value={this.state.selected} Submit={this.submit} />
        <ResetButton value={this.state.selected.length} Reset={this.reset} />
      </React.Fragment>
    );
  }
}

export default DropDown;
