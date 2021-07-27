import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Message } from "./Message";

const useStyles = makeStyles({
    chatBox: {
        minHeight: "30rem",
        overflowY: "scroll",
        backgroundColor: "#d3d3d3"
    }
});

export function Chat() {
    const classes = useStyles();

  return (
      <Box boxShadow={3} className={classes.chatBox}>
        <Message user={"Tzahi Mizrahi"} content={"This is sssssssssssssssssssssssssssssssa message"} time={"13:00"}></Message>
      </Box>
  );
}
