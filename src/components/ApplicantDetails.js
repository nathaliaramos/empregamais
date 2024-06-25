import React from "react";
import styled from "styled-components";

const ApplicantDetailsContainer = styled.div`
  background-color: #ffffff;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
`;

const Applicant = styled.div`
  margin-bottom: 10px;
`;

const ApplicantDetails = ({ applicants }) => {
  return (
    <ApplicantDetailsContainer>
      {applicants.map((applicant, index) => (
        <Applicant key={index}>
          <strong>{applicant.name}</strong>: {applicant.info}
        </Applicant>
      ))}
    </ApplicantDetailsContainer>
  );
};

export default ApplicantDetails;
