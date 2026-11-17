import { GitCommitHorizontal, GitBranch } from 'lucide-react';

interface Job {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

const jobs: Job[] = [
  {
    title: "Senior Backend Engineer",
    company: "RUUT Technologies Inc.",
    startDate: "August 2023",
    endDate: "Present",
    description: "Designed and built backend services for the investment app. Led developers and built the ledger, trading system, investment advisor v2, and STP payment engine."
  },
  {
    title: "Semi-Senior Backend Engineer",
    company: "RUUT Technologies Inc.",
    startDate: "August 2022",
    endDate: "August 2023",
    description: "Built STP webhooks for alerts and fund dispersals. Led the implementation of CLABE account validation using CEP receipts."
  },
  {
    title: "Junior Backend Engineer",
    company: "RUUT Technologies Inc.",
    startDate: "March 2022",
    endDate: "August 2022",
    description: "Built the application backend from scratch and helped launch it in eight months. Planned the server architecture and maintained its stability."
  },
  {
    title: "Software Developer Intern",
    company: "Wirewatt",
    startDate: "September 2021",
    endDate: "March 2022",
    description: "Developed quoting and amortization features across the stack. Migrated a legacy Laravel system to a JavaScript platform in three months."
  }
];

export default function WorkHistoryGithubBranches() {
  return (
    <div className="work-history">
      <p className="branch-label"><GitBranch size={15} aria-hidden="true" /> career / main</p>
      <ol className="career-timeline">
        {jobs.map((job, index) => (
          <li className="career-entry" key={`${job.company}-${job.startDate}`}>
            <div className="commit-mark" aria-hidden="true"><GitCommitHorizontal size={23} /></div>
            <p className="career-date">{job.startDate} <span aria-hidden="true">/</span> {job.endDate}</p>
            <div className="career-content">
              <span className="commit-index">commit 0{jobs.length - index}</span>
              <h3>{job.title}</h3>
              <p className="career-company">{job.company}</p>
              <p className="career-description">{job.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
