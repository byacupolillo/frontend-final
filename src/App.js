import React, {useState} from "react"
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import Router from "./routes/Router"
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";


function App() {

  const token = localStorage.getItem("token")

  return ( 
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;