import React from "react";

export default function MediaCard(props) {
  return (
    <div
      style={{
        height: "1000px",
        width: "100vw",
        backgroundImage: "url(" + props.image + ")",
        backgroundPosition: "top",
        margin: 0,
        padding: 0,
        display: "block",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          width: "45vw",
          height: "100%",
          paddingLeft: "40px",
          boxSizing: "border-box",
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.0))",
        }}
      >
        <h1 style={{ fontSize: "50px", color: "white" }}>{props.service}</h1>
      </div>
    </div>
  );
}
