import React from "react";
import SidebarLayout from "../Layouts/SidebarLayout";
import TaskComponent from "../Components/TaskComponent";

const TaskPage = () => {
    return (
        <SidebarLayout>
            <TaskComponent />
        </SidebarLayout>
    );
};

export default TaskPage;
