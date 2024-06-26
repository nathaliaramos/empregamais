import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Login from "./pages/Login";

//  PAGINA FEITA APENAS PARA IMPLEMENTAR AS ROTAS DO MAIN CONTENT E DO LOGIN  
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/*" element={<MainContent />} />
        <Route path="/" element={<Login />} />
        </Routes>
        
      <Footer />
    </Router>
  );
}

export default App;
