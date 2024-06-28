import React from "react";
import styled from "styled-components";

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

const AppliedJobItem = ({ job, onViewApplicants }) => {
  return (
    <JobItemContainer>
      <JobTitle>{job.title}</JobTitle>
      <CompanyLogo src={job.logo} alt={`${job.title} Logo`} />
      <JobLocation>{job.location}</JobLocation>
      <button onClick={() => onViewApplicants(job.id)}>Ver Candidatos</button>
    </JobItemContainer>
  );
};

export default AppliedJobItem;
