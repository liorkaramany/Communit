import { io } from "socket.io-client";

const SOCKET_ADDRESS = "http://20.101.62.114";
export const socket = io(SOCKET_ADDRESS, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});
