import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import home from "./home.jpg";

export default function MediaCard() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(" + home + ")",
        backgroundPosition: "top",
        backgroundSize: "cover",
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
        <Button variant="contained" disableElevation>
          Go to Form
        </Button>
      </div>
    </div>
  );

  return (
    <Card style={{ height: "100vh", width: "100vw" }}>
      <CardActionArea>
        <CardMedia
          style={{ height: "90vh" }}
          image={home}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Need Help?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Fill in the form, save time and effort in asking for help
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Fill
        </Button>
      </CardActions>
    </Card>
  );
}
