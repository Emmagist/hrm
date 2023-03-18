import React from "react";
import { TaskModalView, TaskFormView } from "../css/TaskStyles";

const TaskModal = ({ handleTaskButtonClick }) => {
    return (
        <TaskModalView>
            <TaskFormView>
                <header>
                    <h3>Create Task</h3>
                    <button onClick={handleTaskButtonClick}>
                        <i className="uil uil-times"></i>
                    </button>
                </header>
                <form>
                    <div className="task_formcontent">
                        <label htmlFor="taskName">Task Name</label>
                        <input
                            type="text"
                            id="taskName"
                            placeholder="Name your task..."
                        />
                    </div>
                    <div className="task_formcontent">
                        <label htmlFor="team">Team</label>
                        <select id="team">
                            <option value="">Select Team</option>
                        </select>
                    </div>
                    <div className="task_formcontent">
                        <label htmlFor="assignee">Assignee</label>
                        <select id="assignee">
                            <option value="">Select Member(s)</option>
                        </select>
                    </div>
                    <div className="task_formcontent">
                        <label htmlFor="description">Task Description</label>
                        <textarea
                            id="description"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                    <div className="button__form">
                        <button onClick={handleTaskButtonClick}>
                            Create Task
                        </button>
                    </div>
                </form>
            </TaskFormView>
        </TaskModalView>
    );
};

export default TaskModal;
