import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import AppliedJobs from "../pages/AppliedJobs";
import AvailableJobs from "../pages/AvailableJobs";
import FormComponent from "../pages/FormComponent";
import FormEmpresas from "../pages/FormEmpresas";
import CompanyJobs from "../pages/CompanyJobs";
import Header from "./Header";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;
// PAGINA FEITA PARA ENCREMENTAR AS ROTAS
const MainContent = () => {
  return (
    <Main>
      <Header />
      <Routes>
        <Route path="/main/applied-jobs" element={<AppliedJobs />} />
        <Route path="/main/available-jobs" element={<AvailableJobs />} />
        <Route path="/main/company-jobs" element={<CompanyJobs />} />
      </Routes>
    </Main>
  );
};

export default MainContent;
