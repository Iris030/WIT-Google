import React from "react";
import { withRouter } from "react-router";

import DisasterContainer from "./DisasterContainer";
import FormContainer from "./FormContainer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <FormContainer />;
        <DisasterContainer />;
      </div>
    );
  }
}

export default withRouter(Home);
