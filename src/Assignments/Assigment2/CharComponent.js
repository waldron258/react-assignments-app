import React from "react";

export default function CharComponent(props) {
  return (
    <div
      onClick={props.click}
      style={{
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black",
      }}
    >
      {props.value}
    </div>
  );
}
