import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import AppliedJobs from "../pages/AppliedJobs";
import AvailableJobs from "../pages/AvailableJobs";
import FormComponent from "../pages/FormComponent";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

const MainContent = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<AppliedJobs />} />
        <Route path="/available-jobs" element={<AvailableJobs />} />
        <Route path="/form" element={<FormComponent />} />
      </Routes>
    </Main>
  );
};

export default MainContent;
