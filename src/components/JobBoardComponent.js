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
} }) => {
    const tags = [role, level];

    if (languages) {
        tags.push(...languages)
    }
    if (tools) {
        tags.push(...tools)
    }

    return (
        <div className={`flex flex-col bg-white shadow-md m-5 p-6 
        rounded ${featured && 'border-l-8 border-teal-500 border-solid'
            }`}>
            <div>
                <img className='-mt-16 mb-4 w-20 h-20' src={logo} alt={company} />
            </div>
            <div className='flex flex-col justify-between ml-4'>
                <h3 className='font-bold text-teal-500'>
                    {company}
                    {isNew && (
                        <span className='bg-teal-500 text-teal-100 font-bold m-2 py-1 px-2 rounded-full'>
                            New
                        </span>
                    )}
                    {isNew && (
                        <span className='bg-gray-800 font-bold py-1 px-2 rounded-full'>
                            Featured
                        </span>
                    )}
                </h3>
                <h2 className='font-bold text-lg'>{position}</h2>
                <p className='text-gray-500'>
                    {postedAt} • {contract} • {location}
                </p>
            </div>
            <div className='flex items-center justify-end ml-auto'>
                {tags ? tags.map((tag) => (<span className='text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded'>{tag}</span>)) : ''}
            </div>
        </div>
    )
}



export default JobBoardComponent
