import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <MainContent />
      <Footer />
    </Router>
  );
};

export default App;
