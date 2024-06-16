import React from 'react';

const AppliedJobItem = ({ job }) => {
return (
<div className="applied-job-item">
<h2 className="job-title">{job.title}</h2>
<p className="job-company">{job.company}</p>
<p className="job-location">{job.location}</p>
<p className="job-applicants">Candidatos: {job.applicants}</p>
<p className="job-stage">Etapa: {job.stage}</p>
</div>
);
};

export default AppliedJobItem;