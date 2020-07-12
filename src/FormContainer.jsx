import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import home from "./images/home.jpg";

export default function MediaCard() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(" + home + ")",
        backgroundPosition: "top",
        backgroundSize: "cover",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "35vw",
          paddingLeft: "50px",
          paddingTop: "50px",
          color: "white",
          backgroundColor: "rgb(0, 0, 0, 0.3)",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>Need Help?</h1>
        <p style={{ fontSize: "25px" }}>
          Fill out this form to get help quickly and easily.
        </p>
        <p>We also support SMS, number: (+61)416876162</p>
        <Link to="/form">
          <Button variant="contained" disableElevation>
            Go to Form
          </Button>
        </Link>
      </div>
    </div>
  );
}
