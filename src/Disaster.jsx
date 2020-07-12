import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "24%",
  },
  media: {
    height: 340,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://localhost:8081//getNumberByType?type=${props.type}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setCount(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {}
      );
  });

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            There're {count} posts
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/posts/${props.type}`}>
          <Button size="small" color="primary">
            More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
