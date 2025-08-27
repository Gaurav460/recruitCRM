import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import CandidateProfile from "./components/CandidateProfile";
import Tabs from "./components/Tabs";
import AssignedJobs from "./components/AssignedJobs";
import Notes from "./components/Notes";

const App: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "70px" }}>
        <Topbar />
        <div style={{ display: "flex" }}>
          {/* Left main content */}
          <main style={{ flex: 1, padding: "20px", background: "#f8f9fa", minHeight: "100vh", marginRight: "320px" }}>
            <CandidateProfile />
            <Tabs />
            <AssignedJobs />
          </main>

          {/* Right Notes Panel */}
          <Notes />
        </div>
      </div>
    </div>
  );
};

export default App;
