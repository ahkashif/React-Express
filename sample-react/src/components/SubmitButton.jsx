import React, { Component } from "react";

export class Buttons extends Component {
  render() {
    return (
      <div className="submitButton">
        {this.props.value.length <= 1 ? (
          <div />
        ) : (
          <React.Fragment>
            <button
              onClick={this.props.Submit}
              className="buttons--submit m-2 w-100 btn btn-info disabled-link"
            >
              Submit
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Buttons;
