import React from "react";
import { withRouter } from "react-router";

import DisasterContainer from "./DisasterContainer";
import FormContainer from "./FormContainer";
import BannerContainer from "./BannerContainer";
import SponserContainer from "./SponserContainer";

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
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background: "url(" + bush + ")",
              width: "600px",
              height: "600px",
              margin: "0 auto",
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
        </div>
        <SponserContainer />
      </div>
    );
  }
}

export default withRouter(Home);
