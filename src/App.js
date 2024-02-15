import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Dashboard from "./Components/Dashboard";

function App() {
  const [state, setState] = React.useState(false);

  return (
    <ThemeProvider theme={createTheme()}>
      <Dashboard darkMode={state} setDarkMode={setState} />
    </ThemeProvider>
  );
}

export default App;
