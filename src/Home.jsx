import React from "react";
import { withRouter } from "react-router";

import DisasterContainer from "./DisasterContainer";
import FormContainer from "./FormContainer";
import BannerContainer from "./BannerContainer";
import SponserContainer from "./SponserContainer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <FormContainer />;
        <DisasterContainer />;
        <BannerContainer />
        <SponserContainer />
      </div>
    );
  }
}

export default withRouter(Home);
