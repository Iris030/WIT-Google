import React from "react";

export default function Sponser(props) {
  return (
    <img
      style={{
        display: "block",
        margin: "0 auto 0 auto",
        width: "80vw",
        boxSizing: "border-box",
      }}
      src={props.image}
      alt="logo"
    />
  );
}
