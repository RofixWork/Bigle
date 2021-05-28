import "./App.css";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Home from "./pages/Home";
function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#190a32",
      },
      secondary: {
        main: "#676f67",
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
