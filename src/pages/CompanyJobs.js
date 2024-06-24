import React, { useState } from "react";
import ApplicantDetails from "../components/ApplicantDetails";
import styled from "styled-components";

const company = {
  name: "Tech Solutions",
  logo: "https://via.placeholder.com/150", // URL do logo da empresa
};

const companyJobs = [
  {
    id: 1,
    title: "Desenvolvedor Frontend",
    location: "São Paulo, SP",
    applicants: 5,
    requirements: "Formação em Ciências da Computação; Experiência em React.",
    applicantDetails: [
      { name: "João Silva", info: "Experiência de 5 anos em React" },
      { name: "Maria Souza", info: "Experiência de 3 anos em Angular" },
    ],
  },
  {
    id: 2,
    title: "Designer UI/UX",
    location: "Rio de Janeiro, RJ",
    applicants: 3,
    requirements: "Formação em Design Gráfico; Portfólio com 10 projetos.",
    applicantDetails: [
      { name: "Carlos Pereira", info: "Portfólio com 10 projetos" },
      { name: "Ana Clara", info: "Experiência de 4 anos em design gráfico" },
    ],
  },
  {
    id: 3,
    title: "Gerente de Projetos",
    location: "Belo Horizonte, MG",
    applicants: 7,
    requirements: "Certificação PMP; Experiência em gestão de projetos.",
    applicantDetails: [
      { name: "Roberto Lima", info: "Experiência de 7 anos em gestão de projetos" },
      { name: "Fernanda Costa", info: "Certificação PMP" },
    ],
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

const JobItemContainer = styled.div`
  background-color: #f33a6a;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const JobTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const JobLocation = styled.p`
  font-size: 18px;
`;

const CompanyLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #0d3fbf;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin: 5px;
  width: auto; /* Ajusta a largura automaticamente */
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Cor mais escura ao passar o mouse */
  }
`;

const CompanyJobs = () => {
  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleViewApplicants = (jobId) => {
    setSelectedJobId((prevJobId) => (prevJobId === jobId ? null : jobId));
  };

  const handleRemoveJob = (jobId) => {
    // Simula a remoção de uma vaga
    alert(`Vaga com ID ${jobId} removida.`);
  };

  const handleEditJob = (jobId) => {
    // Simula a edição de uma vaga
    alert(`Edição da vaga com ID ${jobId} iniciada.`);
  };

  return (
    <AppliedJobsContainer>
      <WelcomeText>Bem-vindo ao portal do empregador</WelcomeText>
      <Subtitle>Veja as vagas que você cadastrou:</Subtitle>
      <div className="applied-job-list">
        {companyJobs.map((job) => (
          <JobItemContainer key={job.id}>
            <JobTitle>{job.title}</JobTitle>
            <CompanyLogo src={company.logo} alt={`${company.name} Logo`} />
            <JobLocation>{job.location}</JobLocation>
            <Button onClick={() => handleEditJob(job.id)}>Editar</Button>
            <Button onClick={() => handleRemoveJob(job.id)}>Remover</Button>
            <Button onClick={() => handleViewApplicants(job.id)}>
              {selectedJobId === job.id ? "Esconder Candidatos" : "Ver Candidatos"}
            </Button>
            {selectedJobId === job.id && (
              <ApplicantDetails applicants={job.applicantDetails} />
            )}
          </JobItemContainer>
        ))}
      </div>
    </AppliedJobsContainer>
  );
};

export default CompanyJobs;
