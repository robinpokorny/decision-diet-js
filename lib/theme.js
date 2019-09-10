const white = "#fff";
const black = "#000";
const purple = "#790f5b";
export const dark = "#212121";
export const light = "#e3e3e3";

export default {
  googleFont:
    "https://fonts.googleapis.com/css?family=Open+Sans|Proza+Libre:400,700",
  fonts: {
    body: '"Open Sans", Helvetica, Arial, sans-serif',
    heading: '"Proza Libre", Helvetica, Arial, sans-serif'
  },
  colors: {
    text: black,
    background: white,
    primary: purple,
    dark,
    light
  },
  styles: {
    h1: {
      fontSize: "2em"
    },
    a: {
      textDecoration: "none"
    },
    strong: {
      color: "primary"
    },
    Slide: {
      textAlign: "left",
      display: "block",
      padding: "2em"
    }
  }
};
