import React, { useState } from "react";
import "./Tabs.css";

const tabs = ["All Details", "Assigned Jobs", "Related Emails", "Candidate Questions", "Contacts", "Notes"];

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Assigned Jobs");

    return (
        <div className="tabs">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
