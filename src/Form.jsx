import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

import Select from "./Select";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();
  const disasters = ["Bushfire", "Flood", "Drought", "Storm", "Other"];
  const services = [
    "Accomodation",
    "House Rennovation",
    "Essentials",
    "Healthcare",
    "Counselling",
    "Other",
  ];
  const welfare = ["Personal", "Small business"];

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Name" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Address" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Contact Information" />
          </Grid>
        </Grid>
      </div>
      <Select options={disasters} label="disasters" />
      <Select options={services} label="services" />
      <Select options={welfare} label="Government welfare" />
    </div>
  );
}
