import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getCommunities } from "./ApiCalls";
import { CommunityCard } from "./CommunityCard";

export function CommunityCards() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    getCommunities().then((communities) => setCommunities(communities));
  }, []);

  function createCommunityCards() {
    return communities.map((community) => (
      <CommunityCard community={community} isInside={true}></CommunityCard>
    ));
  }

  return <Box>{createCommunityCards()}</Box>;
}
