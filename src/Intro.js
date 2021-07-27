import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  introContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
});

export function Intro() {
  const classes = useStyles();

  return <div className={[classes.introContainer, "animate__animated", "animate__pulse"]}></div>;
}
