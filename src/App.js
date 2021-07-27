import logo from "./logo.svg";
import "./App.css";
import { Communities } from "./Communities";
import { Box, Container, makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import '@fontsource/roboto';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <NavBar></NavBar>
      <Box className={classes.root}>
        <Container maxWidth="lg">
          <div className="App">
            <Communities></Communities>
          </div>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
