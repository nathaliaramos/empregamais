import React from 'react';
import JobItem from './JobItem';
import { useSprings, animated } from '@react-spring/web';

const jobs = [
  { id: 1, title: 'Desenvolvedor Frontend', company: 'Empresa X', location: 'São Paulo, SP' },
  { id: 2, title: 'Designer UI/UX', company: 'Empresa Y', location: 'Rio de Janeiro, RJ' },
  { id: 3, title: 'Gerente de Projetos', company: 'Empresa Z', location: 'Belo Horizonte, MG' },
  { id: 4, title: 'Engenheiro de Software', company: 'Empresa A', location: 'Curitiba, PR' },
  
];

const JobList = () => {
  const springs = useSprings(
    jobs.length,
    jobs.map((job, index) => ({
      from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
      to: { opacity: 1, transform: 'translate3d(0,0,0)' },
      delay: index * 200,
    }))
  );

  return (
    <div className="job-list">
      {springs.map((props, index) => (
        <animated.div key={jobs[index].id} style={props}>
          <JobItem job={jobs[index]} />
        </animated.div>
      ))}
    </div>
  );
};

export default JobList;
