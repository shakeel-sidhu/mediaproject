import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./Rangeslider.css";

export default function Rangeslider() {
  return (
    <Box sx={{ width: 381 }}>
        <div className="sliderWrapper">
      <span className="spanValue">100</span>
      <Slider
        min={100}
        max={1000}
        defaultValue={500}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <span className="labelValue">1000</span>
      </div>
    </Box>
  );
}
