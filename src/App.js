import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CadastroEmpresa from "./pages/CadastroEmpresa";
import EditProfile from "./pages/EditProfile";
import CadastroAluno from "./pages/CadastroAluno";
import MainContent from "./components/MainContent";
import Login from "./pages/Login";
import { FaHome, FaBriefcase } from "react-icons/fa";
import { TbBriefcase2Filled, TbLogout } from "react-icons/tb";


const buttonsEditProfile = [
  { path: "/main/available-jobs", label: "Vagas", icon: <FaBriefcase /> },
  { path: "/", label: "Sair", icon: <TbLogout /> }
];

const buttonsCadastroEmpresa = [
  { path: "/", label: "Início", icon: <FaHome /> },
  
];

const buttonsCadastroAluno = [
  { path: "/", label: "Início", icon: <FaHome /> },
  { path: "/main/available-jobsD", label: "Vagas", icon: <TbBriefcase2Filled /> }
];

function App() {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Routes>
          <Route
            path="/edit-profile"
            element={
              <>
                <Header buttons={buttonsEditProfile} />
                <EditProfile />
              </>
            }
          />
          <Route
            path="/cadastro-empresa"
            element={
              <>
                <Header buttons={buttonsCadastroEmpresa} />
                <CadastroEmpresa />
              </>
            }
          />
          <Route
            path="/cadastro-aluno"
            element={
              <>
                <Header buttons={buttonsCadastroAluno} />
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
