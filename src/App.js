import Header from "./components/header/header";
import "./App.css";
import { ThemeProvider } from "styled-components";

import theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
