import React from 'react';
import AppliedJobItem from './AppliedJobItem';
import styled from 'styled-components';

const availableJobs = [
  { id: 4, title: 'Analista de Marketing Digital', location: 'Porto Alegre, RS', applicants: 2, logo: 'https://via.placeholder.com/80x80?text=EmpresaA', requirements: 'Formação em Marketing ou áreas relacionadas; Experiência comprovada em estratégias digitais.' },
  { id: 5, title: 'Engenheiro de Software', location: 'Curitiba, PR', applicants: 4, logo: 'https://via.placeholder.com/80x80?text=EmpresaB', requirements: 'Graduação em Ciência da Computação ou áreas correlatas; Experiência com desenvolvimento de software.' },
  { id: 6, title: 'Analista de Dados', location: 'Florianópolis, SC', applicants: 3, logo: 'https://via.placeholder.com/80x80?text=EmpresaC', requirements: 'Formação em Estatística, Matemática, Engenharia de Dados ou áreas relacionadas; Experiência com ferramentas de análise de dados.' },
];

const WelcomeText = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 40px;
`;

const AppliedJobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledJobItem = styled.div`
  background-color: #F33A6A;
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
  background-color: #0D3FBF; /* Cor azul escolhida */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin-top: 10px;
  width: auto; /* Ajusta a largura automaticamente */
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Cor mais escura ao passar o mouse */
  }
`;

const AvailableJobs = () => {
  return (
    <AppliedJobsContainer>
      <WelcomeText>Bem-vindo ao EmpregaMais</WelcomeText>
      <Subtitle>Veja novas vagas disponíveis para você se candidatar:</Subtitle>
      <div className="applied-job-list">
        {availableJobs.map(job => (
          <StyledJobItem key={job.id}>
            <JobTitle>{job.title}</JobTitle>
            <CompanyLogo src={job.logo} alt={`${job.title} Logo`} />
            <JobLocation>{job.location}</JobLocation>
            <Button onClick={() => alert(`Requisitos para ${job.title}:\n${job.requirements}`)}>
              Requisitos
            </Button>
            <Button onClick={() => alert(`Você se candidatou para: ${job.title}`)}>
              Candidatar-se
            </Button>
          </StyledJobItem>
        ))}
      </div>
    </AppliedJobsContainer>
  );
};

export default AvailableJobs;
