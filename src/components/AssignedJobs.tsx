import React from "react";
import "./AssignedJobs.css";

interface Job {
    id: number;
    title: string;
    company: string;
    assignedDate: string;
    status: string;
}

const jobs: Job[] = [
    { id: 1, title: "Senior Product Manager", company: "Recruit CRM", assignedDate: "Jul 10, 2023", status: "Assigned" },
    { id: 2, title: "Senior Product Manager", company: "Recruit CRM", assignedDate: "Jul 10, 2023", status: "Assigned" },
    { id: 3, title: "Senior Product Manager", company: "Recruit CRM", assignedDate: "Jul 10, 2023", status: "Assigned" },
];

const AssignedJobs: React.FC = () => {
    return (
        <div className="jobs-card">
            <div className="jobs-header">
                <h3>Assigned Job to William Sample</h3>
                <button className="assign-btn">Assign to Job</button>
            </div>
            <table className="jobs-table">
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Assigned Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr key={job.id}>
                            <td>{job.title}</td>
                            <td>{job.company}</td>
                            <td>{job.assignedDate}</td>
                            <td>{job.status}</td>
                            <td>
                                <button className="view-btn">View Files</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AssignedJobs;
