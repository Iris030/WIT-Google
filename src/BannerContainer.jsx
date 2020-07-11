import React from "react";
import Banner from "./Banner";

import motel from "./images/motel.jpg";
import renovation from "./images/renovation.jpg";
import food from "./images/food.jpg";

export default function MediaCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <Banner service="Accomodation" image={motel} />
      <Banner service="Renovation" image={renovation} />
      <Banner service="Essentials" image={food} />
    </div>
  );
}
