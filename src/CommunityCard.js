import {
  Box,
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    margin: "1rem",
  },
  text: {
    textAlign: "left",
  },
  description: {
    marginTop: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  actionsRow: {
    marginBottom: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    textAlign: "right",
  },
});

export function CommunityCard({ community }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.text}>
        <Typography variant="h5" component="h2">
          {community.name}
        </Typography>
        <Typography color="textSecondary">
          {community.numOfParticipants} participants
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.description}
        >
          {community.description}
        </Typography>
      </CardContent>
      <Box
        display="flex"
        justifyContent="flex-end"
        className={classes.actionsRow}
      >
        <Button variant="contained" size="large" color="primary">
          Join Community
        </Button>
      </Box>
    </Card>
  );
}
