# RecruitCRM

A **React + TypeScript single-page application (SPA)** that replicates a candidate management system UI.  
The app includes sidebar navigation, a topbar with actions, candidate profile details, assigned jobs list, and a notes panel – all styled with **plain CSS** (no frameworks).

---

## 🚀 Features
- **Sidebar Navigation** – fixed vertical menu for navigation.
- **Topbar** – search bar, request profile update button, and user avatars.
- **Candidate Profile Section** – shows candidate details like name, role, email, phone, current org, salary, experience, etc.
- **Tabs Section** – navigation between different views (All Details, Assigned Jobs, Related Emails, etc.).
- **Assigned Jobs Table** – displays jobs assigned to the candidate with status and actions.
- **Notes Panel** – right-side panel for adding and viewing candidate notes.

---

## 🛠️ Tech Stack
- **React 18 + TypeScript**
- **Vite** (development environment)
- **Plain CSS** (no CSS libraries/frameworks used)

---

## 📂 Project Structure
recruitCRM/
├── src/
│ ├── components/
│ │ ├── Sidebar.tsx
│ │ ├── Sidebar.css
│ │ ├── Topbar.tsx
│ │ ├── Topbar.css
│ │ ├── CandidateProfile.tsx
│ │ ├── CandidateProfile.css
│ │ ├── Tabs.tsx
│ │ ├── Tabs.css
│ │ ├── AssignedJobs.tsx
│ │ ├── AssignedJobs.css
│ │ ├── Notes.tsx
│ │ ├── Notes.css
│ ├── App.tsx
│ ├── main.tsx
│ ├── index.css
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
