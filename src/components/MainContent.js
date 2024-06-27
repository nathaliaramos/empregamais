import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import AppliedJobs from "../pages/AppliedJobs";
import AvailableJobs from "../pages/AvailableJobs";
import AvailableJobsD from "../pages/AvailableJobsD";
import FormComponent from "../pages/FormComponent";
import FormEmpresas from "../pages/FormEmpresas";
import CompanyJobs from "../pages/CompanyJobs";
import Header from "./Header";
import { FaHome, FaUserEdit } from "react-icons/fa";
import { TbBriefcase2Filled, TbLogout, TbFileSpreadsheet  } from "react-icons/tb";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

const buttonsFormComponent = [
  { path: "/main/available-jobs", label: "Vagas", icon: <TbBriefcase2Filled /> },
  { path: "/main/applied-jobs", label: "Minhas vagas", icon: <TbBriefcase2Filled /> },
  { path: "/", label: "Sair", icon: <TbLogout /> }
];
const buttonsAvailableJobs = [
  { path: "/main/form-component", label: "Cadastrar currículo", icon: <TbFileSpreadsheet /> },
  { path: "/main/applied-jobs", label: "Minhas vagas", icon: <TbBriefcase2Filled /> },
  { path: "/edit-profile", label: "Editar Perfil", icon: <FaUserEdit /> },
  { path: "/", label: "Sair", icon: <TbLogout /> }
];
const buttonsAvailableJobsD = [
  { path: "/", label: "Início", icon: <FaHome /> },
];
const buttonsAppliedJobs = [
  { path: "/main/available-jobs", label: "Vagas", icon: <TbBriefcase2Filled /> },
  { path: "/edit-profile", label: "Editar Perfil", icon: <FaUserEdit /> },
  { path: "/", label: "Sair", icon: <TbLogout /> }
];
const buttonsCompanyJobs = [
  { path: "/main/form-empresas", label: "Cadastrar vagas", icon: <TbBriefcase2Filled /> },
  { path: "/", label: "Sair", icon: <TbLogout /> }
];
const buttonsFormEmpresas = [
  { path: "/main/company-jobs", label: "Minhas vagas", icon: <TbBriefcase2Filled /> },
  { path: "/", label: "Sair", icon: <TbLogout /> }
];

const MainContent = () => {
  return (
    <Main>
      <Routes>
        <Route path="/main/applied-jobs" element={
          <>
            <Header buttons={buttonsAppliedJobs} />
            <AppliedJobs />
          </>
        } />

        <Route path="/main/available-jobs"
          element={
            <>
              <Header buttons={buttonsAvailableJobs} />
              <AvailableJobs />
            </>
          } />

        <Route path="/main/available-jobsD"
          element={
          <>
            <Header buttons={buttonsAvailableJobsD} />
            <AvailableJobsD />
          </>
          } />
        <Route path="/main/company-jobs"
         element={
         <>
          <Header buttons={buttonsCompanyJobs} />
          <CompanyJobs />
        </>
      } />

        <Route path="/main/form-component"
          element={
            <>
              <Header buttons={buttonsFormComponent} />
              <FormComponent />
            </>
          } />
         <Route path="/main/form-empresas"
          element={
            <>
              <Header buttons={buttonsFormEmpresas} />
              <FormEmpresas />
            </>
          } />
      </Routes>
    </Main>
  );
};

export default MainContent;
