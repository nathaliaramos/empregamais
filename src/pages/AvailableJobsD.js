import React from "react";
import styled from "styled-components";

const availableJobs = [
  {
    id: 4,
    title: "Analista de Marketing Digital",
    location: "São Paulo, SP",
    applicants: 2,
    logo: "https://media.licdn.com/dms/image/D4E0BAQEnK1_at9q3PA/company-logo_200_200/0/1656675003147/atento_logo?e=1727308800&v=beta&t=FeM8psydCGDiUY0YSvIoio6Opfao0d8u_hYAX-pl0PQ",
    requirements:
      "Formação em Marketing ou áreas relacionadas; Experiência comprovada em estratégias digitais.",
  },
  {
    id: 5,
    title: "Engenheiro de Software",
    location: "Curitiba, PR",
    applicants: 4,
    logo: "https://media.licdn.com/dms/image/D4E0BAQF7xXpFmB5A8A/company-logo_200_200/0/1688459930446/blankfactor_logo?e=1727308800&v=beta&t=0J7kA-zpJMFIBa24tkjdFg6SdA6YVCNlumfesjC5_3k",
    requirements:
      "Graduação em Ciência da Computação ou áreas correlatas; Experiência com desenvolvimento de software.",
  },
  {
    id: 6,
    title: "Analista de Dados",
    location: "Florianópolis, SC",
    applicants: 3,
    logo: "https://media.licdn.com/dms/image/C4D0BAQFYRH7noPA56w/company-logo_200_200/0/1669136242286?e=1727308800&v=beta&t=rnRarxu-PljxjyxpQxPIE8vfW08SZwzLWMiDRkweGRI",
    requirements:
      "Formação em Estatística, Matemática, Engenharia de Dados ou áreas relacionadas; Experiência com ferramentas de análise de dados.",
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

const StyledJobItem = styled.div`
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
  margin-top: 10px;
  width: auto; 
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; 
  }
`;

const AvailableJobsD = () => {
  return (
    <AppliedJobsContainer>
      
      <WelcomeText>Bem-vindo ao EmpregaMais</WelcomeText>
      <Subtitle>Veja novas vagas disponíveis para você se candidatar:</Subtitle>
      <div className="applied-job-list">
        {availableJobs.map((job) => (
          <StyledJobItem key={job.id}>
            <JobTitle>{job.title}</JobTitle>
            <CompanyLogo src={job.logo} alt={`${job.title} Logo`} />
            <JobLocation>{job.location}</JobLocation>
            <Button
              onClick={() =>
                alert(`Requisitos para ${job.title}:\n${job.requirements}`)
              }
            >
              Requisitos
            </Button>
            <Button
              onClick={() => alert(`Cadastre seu currículo para se cadastrar nesta vaga!`)}
            >
              Candidatar-se
            </Button>
          </StyledJobItem>
        ))}
      </div>
    </AppliedJobsContainer>
  );
};

export default AvailableJobsD;
