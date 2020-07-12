import React from "react";
import { withRouter } from "react-router";
import Grid from "@material-ui/core/Grid";

import Disaster from "./Disaster";
import bushfire from "./images/bushfire.jpg";
import flood from "./images/flood.jpg";
import storm from "./images/storm.jpg";
import drought from "./images/drought.webp";

class DisasterContainer extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingTop: "30px",
          paddingBottom: "30px",
          boxSizing: "border-box",
        }}
      >
        <Disaster
          type="Bushfire"
          number="745"
          image={bushfire}
          description="The immediate impact of bushfires can be devastating, with loss of life, livelihoods and infrastructure at the fire fronts; and increased morbidity and mortality in smoke affected regions, which can often be far from the fires themselves."
        />

        <Disaster
          type="Flood"
          number="455"
          image={flood}
          description="Floods have large social consequences for communities and individuals. As most people are well aware, the immediate impacts of flooding include loss of human life, damage to property, destruction of crops, loss of livestock, and deterioration of health conditions owing to waterborne diseases."
        />
        <Disaster
          type="Storm"
          number="66"
          image={storm}
          description="Hurricanes are large tropical storms with heavy winds. Earthquakes are the shaking, rolling or sudden shock of the earth's surface. Hurricanes affect people because they can cause flooding and can damage roads,bridges, including homes,schools and hospitals. They also affect us because hey can cause injury or death."
        />
        <Disaster
          type="Drought"
          number="745"
          image={drought}
          description="Drought can also affect people's health and safety. Examples of drought impacts on society include anxiety or depression about economic losses, conflicts when there is not enough water, reduced incomes, fewer recreational activities, higher incidents of heat stroke, and even loss of human life."
        />
      </Grid>
    );
  }
}

export default withRouter(DisasterContainer);
