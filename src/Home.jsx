import React from "react";
import { withRouter } from "react-router";
import { Divider } from "@material-ui/core";

import DisasterContainer from "./DisasterContainer";
import FormContainer from "./FormContainer";
import BannerContainer from "./BannerContainer";
import SponserContainer from "./SponserContainer";

import Words from "./Words";

import bush from "./images/bush.jpg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <FormContainer />
        <DisasterContainer />
        <BannerContainer />
        <div
          style={{
            width: "100vw",
            padding: "150px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <div style={{ margin: "50", padding: "50", textAlign: "right" }}>
            <Words
              list={["Social Welfare", "Conselling", "Networking"]}
              color={["#943182", "#5c3194", "#314a94"]}
            />
          </div>
          <div
            style={{
              background: "url(" + bush + ")",
              width: "600px",
              height: "600px",
              margin: "0 auto",
              padding: "0",
              borderRadius: "300px",
            }}
          >
            <h1
              style={{
                fontSize: "175px",
                textAlign: "center",
                lineHeight: "350px",
                color: "white",
              }}
            >
              More
            </h1>
          </div>
          <div style={{ margin: "50", padding: "50", textAlign: "left" }}>
            <Words
              list={["Healthcare", "Car repair", "Transport"]}
              color={["orange", "green", "#4fb82c"]}
            />
          </div>
        </div>
        <Divider />
        <div style={{ padding: "100" }}>
          <SponserContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
