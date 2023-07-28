import React from "react";
import { ElfsightWidget } from "react-elfsight-widget";

const GoogleReviews = () => {
  console.log(ElfsightWidget);
  return <ElfsightWidget widgetID="bb4c5d6f-abb9-4c0e-b6a1-2299ade1df5d" />;
};
// {process.env.REACT_APP_ELFSIGHT_ID}
export default GoogleReviews;
