import React from 'react';

const JobItem = ({ job }) => {
  return (
    <div className="job-item">
      <h2 className="job-title">{job.title}</h2>
      <p className="job-company">{job.company}</p>
      <p className="job-location">{job.location}</p>
    </div>
  );
};

export default JobItem;
