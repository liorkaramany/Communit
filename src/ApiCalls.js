import axios from "axios";
const SERVER_ADDRESS = "http://20.101.62.114";


export async function getCommunities() {
  return [
    {
      name: "The STARTUP Team! 🚀",
      description: "This is the best team ever!",
      numOfParticipants: 20,
      location: "Derech Hashalom 15",
    },
    {
      name: "The LOOSERS Team! 😭",
      description: "This is the team of losers!",
      numOfParticipants: 1,
      location: "Menahem Begin 29",
    },
  ];
}

export async function getUserById(id) {
  await (axios.get(`${SERVER_ADDRESS}`)).data;
}