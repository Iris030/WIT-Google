import React from "react";
import Sponser from "./Sponser";

import logos from "./images/logos.jpg";
// import google from "./google.jpg";
// import unsw from "./unsw.jpg";

export default function SponserContainer() {
  return (
    <div style={{ width: "100vw" }}>
      <Sponser image={logos} />
    </div>
  );
}
