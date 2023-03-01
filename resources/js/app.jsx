import "../css/app.css";

import React from "react";
import ReactDOM from "react-dom";
import DashboardPage from "./Pages/DashboardPage";
import { Toaster } from "react-hot-toast";

function Example() {
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <DashboardPage />
        </div>
    );
}

ReactDOM.render(<Example />, document.getElementById("example"));
