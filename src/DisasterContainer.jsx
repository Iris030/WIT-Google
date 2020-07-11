import React from "react";
import { withRouter } from "react-router";
import Grid from "@material-ui/core/Grid";

import Disaster from "./Disaster";
import bushfire from "./bushfire.jpg";
import flood from "./flood.jpg";
import storm from "./storm.jpg";

class DisasterContainer extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ paddingLeft: "50px", paddingRight: "50px" }}
      >
        <Disaster
          type="Bushfire"
          number="745"
          image={bushfire}
          description="Bush fire is bad"
        />

        <Disaster
          type="Flood"
          number="455"
          image={flood}
          description="Flood is bad"
        />
        <Disaster
          type="Storm"
          number="66"
          image={storm}
          description="Storm is bad"
        />
      </Grid>
    );
  }
}

export default withRouter(DisasterContainer);
