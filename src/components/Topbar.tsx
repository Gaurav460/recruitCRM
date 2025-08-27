import React from "react";
import "./Topbar.css";

const Topbar: React.FC = () => {
    return (
        <header className="topbar">
            <input type="text" placeholder="Search..." className="search" />

            <div className="actions">
                <button className="btn">Request Profile Update</button>
                <button className="btn">Previous</button>
                <div className="avatars">
                    <img src="https://via.placeholder.com/30" alt="user" />
                    <img src="https://via.placeholder.com/30" alt="user" />
                </div>
            </div>
        </header>
    );
};

export default Topbar;
