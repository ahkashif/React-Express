import React from "react";

export default function ResetButton(props) {
  return (
    <div className="resetButton">
      {props.value <= 1 ? (
        <div />
      ) : (
        <button className="btn btn-danger m-2 w-100" onClick={props.Reset}>
          Reset
        </button>
      )}
    </div>
  );
}
