import React from 'react'

// let x = {
//     id: 5,
//     company: "Loop Studios",
//     logo: "./images/loop-studios.svg",
//     isNew: false,
//     featured: false,
//     position: "Software Engineer",
//     role: "FullStack",
//     level: "Midweight",
//     postedAt: "1w ago",
//     contract: "Full Time",
//     location: "Worldwide",
//     languages: ["JavaScript"],
//     tools: ["Ruby", "Sass"]
// }


const JobBoardComponent = ({ job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
} }) => (

        <div className='flex bg-white shadow-md m-5 p-4'>
            <div>
                <img src={logo} alt={company} />
            </div>
            <div className='ml-4'>
                <h3 className='font-bold text-teal-500'>{company}</h3>
                <h2 className='font-bold text-lg'>{position}</h2>
                <p className='text-gray-500'>
                    {postedAt} • {contract} • {location}
                </p>
            </div>
            <div></div>
        </div>
    )



export default JobBoardComponent
