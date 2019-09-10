import React from "react";
import { light, dark } from "./theme";
import fullscreen from "./fullscreen";

const BigBlock = ({ ...props }) => (
  <div
    {...props}
    style={{
      ...fullscreen,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      color: light,
      background: dark,
      fontSize: "2.5em"
    }}
  />
);

export default BigBlock;
