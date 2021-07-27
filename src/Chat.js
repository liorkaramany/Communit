import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { Message } from "./Message";
import { socket } from "./SocketActions";

const useStyles = makeStyles({
  chatBox: {
    minHeight: "30rem",
    overflowY: "scroll",
    backgroundColor: "#d3d3d3",
  },
});

export function Chat() {
  const classes = useStyles();

  useEffect(() => {
    socket.connect();
    socket.emit("join", { userId: "asdsa", roomId: "1234" });
  }, []);

  return (
    <Box boxShadow={3} className={classes.chatBox}>
      <Message
        user={"Tzahi Mizrahi"}
        content={"This is a message"}
        time={"13:00"}
      ></Message>
    </Box>
  );
}
