import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width}) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      axisSettings={{
        minX: -1,
        maxX: 7,
        maxY: 7,
        minY: -1,
      }}
      fill="blue"
      dataSource={[0, 6, 2, 1, 4, 2, 5]}
      // To customize data label fill, border, and text color
    ></SparklineComponent>
  );
};

export default SparkLine;
