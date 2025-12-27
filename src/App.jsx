import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './config/theme';
import { Routes, Route } from "react-router-dom";

import SpotlightCard from './components/SpotlightCard/SpotlightCard';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import "react-lazy-load-image-component/src/effects/blur.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <SpotlightCard className={isDarkMode ? "dark-card" : "light-card"}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
        {/* <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> */}
      </SpotlightCard>
    </ThemeProvider>
  );
}

export default App;
