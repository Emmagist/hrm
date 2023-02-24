// import './bootstrap';
import "../css/app.css";

// import { createRoot } from 'react-dom/client';
// import { createInertiaApp } from '@inertiajs/react';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./Components/SideBar";

function Example() {
    return (
        <div>
            <SideBar />
        </div>
    );
}

ReactDOM.render(<Example />, document.getElementById("example"));
