import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import history from "./history";

export default function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <BrowserRouter>
          <Routes history={history}>
            <Route path="/" element={<Home />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}
