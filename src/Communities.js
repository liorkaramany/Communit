import { Box, Typography, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { getCommunities } from "./ApiCalls";
import { CommunityCard } from "./CommunityCard";

const useStyles = makeStyles({
  communitiesHeader: {
    display: "block",
    margin: "2rem",
    textAlign: "left"
  },
});

export function Communities() {
  const classes = useStyles();

  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    getCommunities().then((communities) => setCommunities(communities));
  }, []);

  function createCommunityCards() {
    return communities.map((community) => (
      <CommunityCard community={community}></CommunityCard>
    ));
  }

  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
        className={classes.communitiesHeader}
      >
        Hot communities today 🔥
      </Typography>
      <Box>{createCommunityCards()}</Box>
    </Box>
  );
}
