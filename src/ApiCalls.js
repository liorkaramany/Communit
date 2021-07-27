import axios from "axios";

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
