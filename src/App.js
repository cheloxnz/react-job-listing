import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent'


function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  console.log(jobs)

  return (
    <div>
      <h1 className='text-4xl'>Hello</h1>
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
            jobs.map((job) => (
              <JobBoardComponent
                job={job}
                key={job.id}
              />
            ))
          )
      }
    </div>
  );
}

export default App;
