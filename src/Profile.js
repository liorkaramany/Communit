import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import please from "./assets/profile.jpg";
import { Communities } from "./Communities";
import { CommunityCards } from "./CommunityCards";

const useStyles = makeStyles({
  profilePicture: {
    borderRadius: "100%",
    width: "10rem",
    height: "10rem",
  },
  profileDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
    marginTop: "6rem",
  },
  tag: {
    backgroundColor: "#757de8",
    paddingTop: ".4rem",
    paddingBottom: ".4rem",
    paddingLeft: ".6rem",
    paddingRight: ".6rem",
    borderRadius: "20px",
    marginLeft: ".75rem",
    cursor: "pointer",
  },
  communitiesHeader: {
    display: "block",
    width: "100%",
    textAlign: "left",
    marginTop: "2rem",
  },
});

export function Profile() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.profileDiv}>
        <img
          src={please}
          alt="Profile"
          className={classes.profilePicture}
        ></img>
        <h1>Moshe Cohen</h1>
        <div>
          <span className={classes.tag}>Sports</span>
          <span className={classes.tag}>Swimming</span>
          <span className={classes.tag}>Games</span>
          <span className={classes.tag}>Programming</span>
          <span className={classes.tag}>Reading</span>
          <span className={classes.tag}>Rubix cubes</span>
        </div>
        <p style={{ marginTop: "2rem" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
          consequatur harum aspernatur perspiciatis magnam nostrum tempore
          tenetur ducimus totam! Iste impedit beatae voluptates deserunt
          voluptate sequi numquam quidem repellat doloribus eum nobis, tempora
          pariatur cupiditate, voluptatum illum nemo quibusdam. Excepturi!
        </p>

        <div style={{ textAlign: "left", width: "100%" }}>
          <p>
            <strong>Mador:</strong> <Link>Octopus</Link>
          </p>
          <p>
            <strong>Address:</strong> Haaretz 16, Rosh Pina
          </p>
        </div>
        <Typography
          variant="h3"
          component="h1"
          className={classes.communitiesHeader}
        >
          Communities you're in
          <CommunityCards></CommunityCards>
        </Typography>
      </div>
    </div>
  );
}
