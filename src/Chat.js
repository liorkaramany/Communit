import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import { socket } from "./SocketActions";

const useStyles = makeStyles({
  chatBox: {
    marginTop: "4rem",
    height: "30rem",
    overflowY: "scroll",
    backgroundColor: "#e4e4e9",
  },
});

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const classes = useStyles();

  useEffect(() => {
    socket.connect();
    socket.emit("join", { userId: "asdsa", roomId: "1234" });
  }, []);

  function sendMessage() {
    setMessages((m) =>
      m.concat({
        user: "Moshe Cohen",
        content: message,
        time: new Date().toUTCString(),
      })
    );
    setMessage("");
  }

  function handleChange(event) {
    setMessage(event.target.value);
  }

  return (
    <div>
      <Box boxShadow={3} className={classes.chatBox}>
        {messages.map((m) => (
          <Message user={m.user} content={m.content} time={m.time}></Message>
        ))}
      </Box>
      <div style={{ display: "flex", width: "100%", marginTop: "1rem" }}>
        <TextField
          value={message}
          id="standard-basic"
          label="Enter your message"
          style={{ width: "90%" }}
          onChange={handleChange}
        />
        <Button
          color="primary"
          variant="contained"
          style={{ width: "10%" }}
          onClick={sendMessage}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
