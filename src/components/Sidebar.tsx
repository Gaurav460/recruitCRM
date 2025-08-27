import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <div className="logo">Recruit CRM</div>
            <nav className="nav">
                <ul>
                    <li className="active">🏠</li>
                    <li>👤</li>
                    <li>📂</li>
                    <li>⚙️</li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
