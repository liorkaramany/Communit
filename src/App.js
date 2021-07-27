import logo from "./logo.svg";
import "./App.css";
import { Communities } from "./Communities";
import { Box, Container, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import "@fontsource/roboto";
import { Chat } from "./Chat";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/">
              <Communities />
            </Route>
            <Route exact path="/chat">
              <Chat />
            </Route>
            <Box className={classes.root}></Box>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
