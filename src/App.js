import logo from "./logo.svg";
import "./App.css";
import { Communities } from "./Communities";
import { Box, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <div className="App">
          <Communities></Communities>
        </div>
      </Container>
    </Box>
  );
}

export default App;
