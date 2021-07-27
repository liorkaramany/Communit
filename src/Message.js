import { Box, Card, CardContent, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  message: {
    minWidth: "6rem",
    maxWidth: "20rem",
    textAlign: "left",
    lineHeight: ".5rem",
  },
});

export function Message({ user, content, time }) {
  const classes = useStyles();

  return (
    <Card className={classes.message}>
      <h4>{user}</h4>
      <p style={{ lineHeight: "1.1rem" }}>{content}</p>
      <p>{time}</p>
    </Card>
  );
}
