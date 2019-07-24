import React from "react";
import InputComp from "./InputComp";

function DropDownComp(props) {
  const Data = props.courses;
  return (
    <React.Fragment>
      <InputComp
        noOfVersions={props.version} //noOfVersions={0}
        inputChange={props.inputChange}
        value={props.value}
      />
      <select className="coursesList" onChange={props.changeVal}>
        {Data.map(item => {
          return <option key={item.id}>{item.name}</option>;
        })}
      </select>
    </React.Fragment>
  );
}

export default DropDownComp;
