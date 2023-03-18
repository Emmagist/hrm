import "../src/css/app.css";
import React from "react";
import DashboardPage from "./Pages/DashboardPage";
import TaskPage from "./Pages/TaskPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function App() {
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <Router>
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/task" element={<TaskPage />} />
                </Routes>
            </Router>
        </div>
    );
}
