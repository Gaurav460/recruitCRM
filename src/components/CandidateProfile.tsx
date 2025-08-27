import React from "react";
import "./CandidateProfile.css";

const CandidateProfile: React.FC = () => {
    return (
        <div className="candidate-card">
            <div className="profile-header">
                <img
                    src="https://via.placeholder.com/60"
                    alt="Profile"
                    className="profile-pic"
                />
                <div>
                    <h2 className="candidate-name">William Sample</h2>
                    <p className="candidate-role">Senior Product Manager · Dallas, USA</p>
                    <p className="candidate-contact">
                        williamsample@gmail.com · +91 9021323236
                    </p>
                </div>
            </div>

            <div className="details-grid">
                <p><span>Current Org:</span> World Bank Group</p>
                <p><span>Current Salary:</span> $60,000</p>
                <p><span>Notice Period:</span> 90 Days</p>
                <p><span>Experience:</span> 5 Years</p>
            </div>
        </div>
    );
};

export default CandidateProfile;
