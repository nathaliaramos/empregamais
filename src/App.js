import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CadastroEmpresa from "./pages/CadastroEmpresa";
import EditProfile from "./pages/EditProfile";
import AppliedJobs from "./pages/AppliedJobs";
import AvailableJobs from "./pages/AvailableJobs";
import CadastroAluno from "./pages/CadastroAluno";
import MainContent from "./components/MainContent";
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Routes>
          <Route
            path="/available-jobs"
            element={
              <>
                <Header />
                <AvailableJobs />
              </>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <>
                <Header />
                <EditProfile />
              </>
            }
          />

          <Route
            path="/cadastro-empresa"
            element={
              <>
                <Header />
                <CadastroEmpresa />
              </>
            }
          />
          <Route
            path="/cadastro-aluno"
            element={
              <>
                <Header />
                <CadastroAluno />
              </>
            }
          />
          <Route path="/*" element={<MainContent />} />
          <Route path="/" element={<Login />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
