import Daashboard from "@/Components/Daashboard";
import SideBar from "@/Components/SideBar";

import { DashboardPageView } from "../../css/DashboardPageStyles";

import React from "react";

const DashboardPage = () => {
    return (
        <DashboardPageView>
            <SideBar />
            <Daashboard />
        </DashboardPageView>
    );
};

export default DashboardPage;
