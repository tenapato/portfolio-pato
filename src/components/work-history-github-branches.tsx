import { GitCommitHorizontal, GitBranch } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
}

interface Job {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description?: string;
  highlights?: string[];
  stats?: { caption: string; items: Stat[] };
  tags: string[];
}

const jobs: Job[] = [
  {
    title: "Senior Backend Engineer",
    company: "RUUT Technologies Inc.",
    startDate: "August 2023",
    endDate: "Present",
    stats: {
      caption: "across RUUT, 2022 – today",
      items: [
        { value: "1,900+", label: "commits" },
        { value: "1,000+", label: "tickets closed" },
        { value: "350+", label: "bugs fixed" },
        { value: "870+", label: "pull requests" }
      ]
    },
    highlights: [
      "Built the ledger, the trading system on the Alpaca Broker API, investment advisor v2, and the STP payment engine. Wrote 82% of the commits in the core backend.",
      "Built Ruut Apex, an internal trading panel for managing orders, positions, and P&L across many brokerage accounts, with role-based access, MFA on orders, and TradingView alerts.",
      "Main author of 16 services, including the broker event listener that records every trade in the ledger, the customer-support panel, and AWS tooling.",
      "Led developers through code reviews and system design, and resolved 250+ production support cases for SPEI transfers and the app.",
      "In 2026, shipped an AI inference worker, an MCP server that gives the team one endpoint for the broker, database, and GitHub, and a direct-debit worker."
    ],
    tags: ["TypeScript", "Node.js", "Cloudflare Workers", "AWS", "PostgreSQL", "MongoDB", "Alpaca Broker API", "MCP"]
  },
  {
    title: "Semi-Senior Backend Engineer",
    company: "RUUT Technologies Inc.",
    startDate: "August 2022",
    endDate: "August 2023",
    description: "Built STP webhooks for alerts and fund dispersals. Led the implementation of CLABE account validation using CEP receipts.",
    tags: ["TypeScript", "Cloudflare Workers", "PostgreSQL", "STP / SPEI"]
  },
  {
    title: "Junior Backend Engineer",
    company: "RUUT Technologies Inc.",
    startDate: "March 2022",
    endDate: "August 2022",
    description: "Built the application backend from scratch and helped launch it in eight months. Planned the server architecture and maintained its stability.",
    tags: ["TypeScript", "Cloudflare Workers", "PostgreSQL", "REST APIs"]
  },
  {
    title: "Software Developer Intern",
    company: "Wirewatt",
    startDate: "September 2021",
    endDate: "March 2022",
    description: "Developed quoting and amortization features across the stack. Migrated a legacy Laravel system to a JavaScript platform in three months.",
    tags: ["JavaScript", "Laravel"]
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
              {job.stats && (
                <div className="career-stats">
                  <dl>
                    {job.stats.items.map((stat) => (
                      <div key={stat.label}>
                        <dt>{stat.label}</dt>
                        <dd>{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="career-stats-caption">{job.stats.caption}</p>
                </div>
              )}
              {job.description && <p className="career-description">{job.description}</p>}
              {job.highlights && (
                <ul className="career-highlights">
                  {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              )}
              <ul className="project-tags career-tags" aria-label={`${job.title} technologies`}>
                {job.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
