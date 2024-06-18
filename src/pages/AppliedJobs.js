import React from "react";
import AppliedJobItem from "../AppliedJobItem";
import styled from "styled-components";

const appliedJobs = [
  {
    id: 1,
    title: "Desenvolvedor Frontend",
    company: "Empresa X",
    location: "São Paulo, SP",
    applicants: 5,
    stage: "Entrevista Técnica",
  },
  {
    id: 2,
    title: "Designer UI/UX",
    company: "Empresa Y",
    location: "Rio de Janeiro, RJ",
    applicants: 3,
    stage: "Análise de Portfólio",
  },
  {
    id: 3,
    title: "Gerente de Projetos",
    company: "Empresa Z",
    location: "Belo Horizonte, MG",
    applicants: 7,
    stage: "Entrevista Inicial",
  },
];

const WelcomeText = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 40px;
`;

const AppliedJobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppliedJobs = () => {
  return (
    <AppliedJobsContainer>
      <WelcomeText>Bem-vindo ao EmpregaMais</WelcomeText>
      <Subtitle>Veja as vagas que você se candidatou:</Subtitle>
      <div className="applied-job-list">
        {appliedJobs.map((job) => (
          <AppliedJobItem key={job.id} job={job} />
        ))}
      </div>
    </AppliedJobsContainer>
  );
};

export default AppliedJobs;
