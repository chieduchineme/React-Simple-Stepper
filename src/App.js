import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import FormPage from "./pages/Form";
import "./App.css";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const handleThemeChange = () => {
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newThemeMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <button className="toggle-theme" onClick={handleThemeChange}>
        {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
      <Router>
          <Routes>
            <Route path="/" element={<FormPage />} />
          </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;

