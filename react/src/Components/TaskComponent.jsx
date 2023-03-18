import React, { useState } from "react";
import TaskCardComponent from "./TaskCardComponent";
import TaskGraph from "./TaskGraph";
import DataTable from "./DataTable";
import TaskModal from "./TaskModal";

import {
    TaskView,
    TaskHeaderView,
    TaskCardView,
    TaskButton,
    TaskGraphView,
} from "../css/TaskStyles";

import { DashboardInputView } from "../css/DashboardPageStyles";

const TaskComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTaskButtonClick = () => setIsOpen(!isOpen);

    return (
        <TaskView>
            <TaskHeaderView>
                <h1>Task</h1>
                <DashboardInputView>
                    <input type="text" placeholder="Search" />
                    <i className="uil uil-search"></i>
                </DashboardInputView>
                <TaskButton onClick={handleTaskButtonClick}>
                    + Create new task
                </TaskButton>
            </TaskHeaderView>

            {isOpen && (
                <TaskModal handleTaskButtonClick={handleTaskButtonClick} />
            )}

            <div className="task__content__view">
                <TaskCardView>
                    <TaskCardComponent title="All Task" total="100 Tasks" />
                    <TaskCardComponent title="Active Task" total="20 Tasks" />
                    <TaskCardComponent
                        title="Completed Task"
                        total="70 Tasks"
                    />
                    <TaskCardComponent
                        title="Incompleted Task"
                        total="10 Tasks"
                    />
                </TaskCardView>

                <TaskGraphView>
                    <h4>Task Status</h4>
                    <TaskGraph />
                </TaskGraphView>
                <DataTable />
            </div>
        </TaskView>
    );
};

export default TaskComponent;
