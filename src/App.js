import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import CompanyJobs from './pages/CompanyJobs';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/company-jobs" element={<CompanyJobs />} />
        <Route path="/" element={<MainContent />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
