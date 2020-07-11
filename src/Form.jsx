import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

import MultiSelect from "./MultiSelect";
import home from "./images/home.jpg";

import Select from "./Select";
import { FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon() {
  const [anonymous, setAnonymous] = useState(false);
  const [post, setPost] = useState(false);

  const classes = useStyles();
  const disasters = ["Bushfire", "Flood", "Drought", "Storm", "Other"];
  const services = [
    "Accomodation",
    "House Rennovation",
    "Essentials",
    "Healthcare",
    "Counselling",
  ];
  const welfare = ["Personal", "Small business"];

  return (
    <div
      style={{
        background: "url(" + home + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        padding: "100px",
      }}
    >
      <Card style={{ margin: "0 auto", width: "25%", padding: "10px" }}>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item style={{ width: "90%" }}>
              <TextField
                style={{ width: "100%" }}
                id="input-with-icon-grid"
                label="Name"
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item style={{ width: "90%" }}>
              <TextField id="input-with-icon-grid" label="Address" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item style={{ width: "90%" }}>
              <TextField
                id="input-with-icon-grid"
                label="Contact Information"
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <FormControlLabel
            control={
              <Checkbox
                checked={anonymous}
                onChange={() => setAnonymous(!anonymous)}
              />
            }
            label="Anonymous"
          />
        </div>
        <Select options={disasters} label="disasters" />
        <MultiSelect options={services} label="services" />
        <Select options={welfare} label="Government welfare" />
        <div className={classes.margin}>
          <FormControlLabel
            control={
              <Checkbox checked={post} onChange={() => setPost(!post)} />
            }
            label="Include a Post? (Optional)"
          />
        </div>
        <div
          className={classes.margin}
          style={{
            display: post ? "block" : "none",
          }}
        >
          <TextField label="Post Title" style={{ width: "95%" }} />
          <TextField label="Details" multiline style={{ width: "95%" }} />
        </div>
        <div
          className={classes.margin}
          style={{
            display: post ? "block" : "none",
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginTop: "5px", marginBottom: "5px" }}
            onClick={() => document.querySelector("#upload").click()}
          >
            Upload Photo(s)
          </Button>
          <input
            type="file"
            id="upload"
            style={{ display: "none" }}
            multiple
            accept="image/*"
          />
        </div>
        <div className={classes.margin}>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "5px", marginBottom: "5px" }}
            >
              Submit
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
