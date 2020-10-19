/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobBoardComponent from './components/JobBoardComponent'


function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (languages) {
      tags.push(...languages)
    }
    if (tools) {
      tags.push(...tools)
    }


    return tags.some(tag => filters.includes(tag));
  }

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter)
    );
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const filteredJobs = jobs.filter(filterFunc);


  return (
    <>
      <header className='bg-teal-500 mb-12'>
        <img src='/images/bg-header-desktop.svg' alt='bg-image' />
      </header>
      <div className='container m-auto'>
        {filters.length > 0 && (
          <div className={`flex bg-white shadow-md my-16 mx-10 p-6 
            rounded`}>
            {filters.map(
              (filter) => <span
                onClick={() => handleFilterClick(filter)}
                className='cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0'
              >
                {filter}
                <span className='bg-red-500 text-teal-100 ml-1 rounded'>×</span>
              </span>
            )}
            <button onClick={clearFilters} className='font-bold text-gay-700 ml-auto'>Clear</button>
          </div>
        )}
        {
          jobs.length === 0 ? (
            <p>Jobs are fetching...</p>
          ) : (
              filteredJobs.map((job) => (
                <JobBoardComponent
                  job={job}
                  key={job.id}
                  handleTagClick={handleTagClick}
                />
              ))
            )}
      </div>
    </>
  );
}

export default App;
