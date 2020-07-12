import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  var userName;
  //console.log(props.form.name);
  if (props.form.name.can_public === false) {
    userName = "Anonymous";
  } else {
    userName = props.form.name.value;
  }

  var address;
  //console.log(props.form.name);
  if (props.form.Address.can_public === false) {
    address = "/Address Hide";
  } else {
    address = props.form.Address.value;
  }

  var contact;
  //console.log(props.form.name);
  if (props.form.Contact_info.can_public === false) {
    contact = "/Contact Detail Hide";
  } else {
    contact = props.form.Contact_info.value;
  }

  //console.log(baseImg);
  var pic;
  //console.log(props.form.name);
  if (props.form.Pic.can_public === false) {
    pic = "/Hide";
  } else {
    pic = props.form.Pic.value;
  }
  //console.log(pic,"111111");

  //var serNum = length(props.form.Services);
  var sers = props.form.Services;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {userName[0]}
          </Avatar>
        }
        title={userName}
        subheader={props.form.Time}
      />
      <CardMedia
        className={classes.media}
        image={pic}
        //title="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.form.Title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {address}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {contact}
        </Typography>
        <Typography variant="body2" component="p">
          {props.form.Content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {sers.map(function (s) {
          return <Button variant="outlined">{s}</Button>;
        })}
      </CardActions>
    </Card>
  );
}

/*
class Post extends React.Component {
  render() {
    return <p>{this.props.form.name}</p>;
  }

export default Post;
*/
