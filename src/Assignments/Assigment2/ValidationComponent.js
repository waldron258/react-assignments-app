import React from "react";

export default function ValidationComponent(props) {
  return (
    <div>
      <p style={props.length > 4 ? { color: "green" } : { color: "red" }}>
        {props.length > 4 ? "Text long enough" : "Text too short"}
      </p>
    </div>
  );
}
