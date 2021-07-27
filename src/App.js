import logo from "./logo.svg";
import "./App.css";
import { Communities } from "./Communities";
import { Box, Container, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import "@fontsource/roboto";
import { Chat } from "./Chat";
import { useEffect, useState } from "react";
import { Intro } from "./Intro";
import { Profile } from "./Profile";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setHasLoaded(false);
    setTimeout(() => {
      setHasLoaded(true);
    }, 0);
  }, []);

  return (
    <div className="App">
      <Router>
        {!hasLoaded ? (
          <Intro></Intro>
        ) : (
          <div>
            <NavBar></NavBar>
            <Container maxWidth="lg">
              <Switch>
                <Route exact path="/">
                  <Communities />
                </Route>
                <Route exact path="/chat">
                  <Chat />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
                <Box className={classes.root}></Box>
              </Switch>
            </Container>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
