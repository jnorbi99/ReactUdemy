import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  
  console.log(props.data);
  const dataPointValues = props.data.map((point) => point.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.data.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={totalMaximum}
          label={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
