import React from 'react';
import './styles.css';

const jobs = [
  { id: 1, title: 'Desenvolvedor Frontend', company: 'Empresa X', location: 'São Paulo, SP' },
  { id: 2, title: 'Designer UI/UX', company: 'Empresa Y', location: 'Rio de Janeiro, RJ' },
  { id: 3, title: 'Gerente de Projetos', company: 'Empresa Z', location: 'Belo Horizonte, MG' },
  { id: 4, title: 'Engenheiro de Software', company: 'Empresa A', location: 'Curitiba, PR' },
  { id: 5, title: 'Analista de Dados', company: 'Empresa B', location: 'Porto Alegre, RS' },
];

const JobList = () => {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <div key={job.id} className="job-item">
          <h2 className="job-title">{job.title}</h2>
          <p className="job-company">{job.company}</p>
          <p className="job-location">{job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
