'use client'

import { CalendarIcon } from "lucide-react"

interface Job {
  title: string
  company: string
  startDate: string
  endDate: string
  description: string
}

const jobs: Job[] = [
  {
    title: "Senior Backend Engineer",
    company: "RUUT Technologies Inc.",
    startDate: "August 2023",
    endDate: "Present",
    description: "Responsible for planning, designing, and implementing backend services for the investment application, detecting and resolving errors, and adding new functionalities. Led a team of developers and ensured efficient task distribution. Created RUUT's ledger and trading system, developed investment advisor system version 2, and implemented RUUT's payment engine with STP."
  },
  {
    title: "Semi-Senior Backend Engineer",
    company: "RUUT Technologies Inc.",
    startDate: "August 2022",
    endDate: "August 2023",
    description: "Developed and implemented the webhooks system for alerts and fund dispersals with STP within one month. Led the development and implementation of CLABE account validation system with CEP receipts. Completed both projects within tight deadlines."
  },
  {
    title: "Junior Backend Engineer",
    company: "RUUT Technologies Inc.",
    startDate: "March 2022",
    endDate: "August 2022",
    description: "Led the development of the RUUT application backend from scratch, successfully launching it within eight months. Responsible for planning server architecture, implementation, and ensuring server stability."
  },
  {
    title: "Software Developer Intern",
    company: "Wirewatt",
    startDate: "September 2021",
    endDate: "March 2022",
    description: "Developed frontend and backend functionalities for quotes and amortization systems. Migrated legacy system from Laravel to a JavaScript-based platform. Planned and implemented the new system within three months."
  }
];

export default function WorkHistoryGithubBranches() {
  return (
    <div className="max-w-4xl mx-auto p-4 ">
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
        {jobs.map((job, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${
            index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
          }`}>
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
            </div>
            <div className="order-1 project-card bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4 relative">
              {/* GitHub-like branch */}
              {/* <div className={`absolute top-1/2 ${index % 2 === 0 ? 'left-0' : 'right-0'} transform ${index % 2 === 0 ? '-translate-x-full' : 'translate-x-full'} -translate-y-1/2 w-1/4 h-1 bg-gray-200`}></div> */}
              {/* <div className={`absolute top-1/2 ${index % 2 === 0 ? 'left-0' : 'right-0'} transform ${index % 2 === 0 ? '-translate-x-[calc(100%+1px)]' : 'translate-x-[calc(100%+1px)]'} -translate-y-1/2 w-2 h-2 rounded-full bg-gray-800 border-2 border-white`}></div> */}
              <h3 className="mb-3 font-bold text-white">{job.title}</h3>
              <p className="text-sm font-medium text-light-slate">{job.company}</p>
              <div className="flex items-center text-sm text-green mt-1">
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>{job.startDate} - {job.endDate}</span>
              </div>
              <p className="text-sm leading-snug tracking-wide text-gray-400 mt-2">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}