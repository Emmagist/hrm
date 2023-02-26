import "../css/app.css";

import React from "react";
import ReactDOM from "react-dom";
import DashboardPage from "./Pages/DashboardPage";

function Example() {
    return (
        <div>
            <DashboardPage />
        </div>
    );
}

ReactDOM.render(<Example />, document.getElementById("example"));
