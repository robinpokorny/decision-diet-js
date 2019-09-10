import React from "react";
import { Image } from "mdx-deck";
import fullscreen from "./fullscreen";

const FullImage = ({ ...props }) => <Image {...props} style={fullscreen} />;

export default FullImage;
