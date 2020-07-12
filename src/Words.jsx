import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveFontSizes(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography
          style={{ fontStyle: "italic", color: `${props.color[0]}` }}
          variant="h2"
        >
          {props.list[0]}
        </Typography>
        <Typography
          style={{ fontStyle: "italic", color: `${props.color[1]}` }}
          variant="h3"
        >
          {props.list[1]}
        </Typography>
        <Typography
          style={{ fontStyle: "italic", color: `${props.color[2]}` }}
          variant="h4"
        >
          {props.list[2]}
        </Typography>
      </ThemeProvider>
    </div>
  );
}
