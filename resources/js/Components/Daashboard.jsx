import React from "react";
import img1 from "../../assets/Ellipse 14.png";
import img2 from "../../assets/Ellipse 15.png";
import img3 from "../../assets/Ellipse 16.png";
import img4 from "../../assets/Ellipse 17.png";
import img5 from "../../assets/Ellipse 18.png";

import {
    DashboardView,
    DashboardNavView,
    DashboardInputView,
    EmployeesView,
    DashboardEmployeesView,
    DashboardGraphView,
    DashboardEventView,
} from "../../css/DashboardPageStyles";
import Application from "./Application";
import AttendanceChart from "./AttendanceChart";
import EventComponent from "./Events";
import MailBox from "./MailBox";
import ApexChart from "./StaffChart";

const Daashboard = () => {
    return (
        <DashboardView>
            <DashboardNavView>
                <h1>Dashboard</h1>
                <DashboardInputView>
                    <input type="text" name="" id="" placeholder="Search" />
                    <i className="uil uil-search"></i>
                </DashboardInputView>
            </DashboardNavView>
            <div className="DashboardContentView">
                <DashboardEmployeesView>
                    <div className="dashboard_employees">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <img src={img4} />
                        <img src={img5} />
                        <span>45+</span>
                    </div>
                    <EmployeesView>
                        <p>Manage Employees</p>
                    </EmployeesView>
                </DashboardEmployeesView>
                <DashboardGraphView>
                    <div className="attendance_graph">
                        <h4>Staff Performance</h4>
                        <ApexChart />
                    </div>
                    <div className="attendance_graph">
                        <h4>Time & Attendance</h4>
                        <AttendanceChart />
                    </div>
                </DashboardGraphView>
                <DashboardEventView>
                    <div className="mailbox_content">
                        <h4>Mailbox</h4>
                        <MailBox />
                    </div>
                    <div className="event_content">
                        <EventComponent />
                    </div>
                    <div className="application_content">
                        <h4>Application</h4>
                        <Application />
                        <Application />
                        <Application />
                    </div>
                </DashboardEventView>
            </div>
        </DashboardView>
    );
};

export default Daashboard;
