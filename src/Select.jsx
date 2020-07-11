import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [option, setOptions] = React.useState(props.options[0]);

  const handleChange = (event) => {
    setOptions(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        select
        label={props.label}
        value={option}
        onChange={handleChange}
        style={{ width: "95%" }}
      >
        {props.options.map((op) => (
          <MenuItem key={op} value={op}>
            {op}
          </MenuItem>
        ))}
      </TextField>
      <div style={{ display: option === "Other" ? "block" : "none" }}>
        <TextField
          id="standard-full-width"
          style={{ marginTop: 8, width: "95%" }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </form>
  );
}
