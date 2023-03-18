import React from "react";

import { TaskCardView, TaskCardComponentView } from "../css/TaskStyles";

const TaskCardComponent = (props) => {
    return (
        <TaskCardComponentView>
            <span>{props.title}</span>
            <h3>{props.total}</h3>
        </TaskCardComponentView>
    );
};

export default TaskCardComponent;
