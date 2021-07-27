import React, { useState, useEffect } from "react";
import { getCommunities } from "./ApiCalls";
import { CommunityCard } from "./CommunityCard";

export function Communities() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    getCommunities().then((communities) => setCommunities(communities));
  }, []);

  function createCommunityCards() {
    return communities.map((community) => (
      <CommunityCard community={community}></CommunityCard>
    ));
  }

  return <div>{createCommunityCards()}</div>;
}
