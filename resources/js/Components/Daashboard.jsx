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
} from "../../css/DashboardPageStyles";
import AttendanceChart from "./AttendanceChart";
import ApexChart from "./StaffChart";
// import StaffChart from "./StaffChart";

const Daashboard = () => {
    return (
        <DashboardView>
            <DashboardNavView>
                <h1>Dashboard</h1>
                <DashboardInputView>
                    <input type="text" name="" id="" placeholder="Search" />
                    <i class="uil uil-search"></i>
                </DashboardInputView>
            </DashboardNavView>
            <div className="DashboardContentView">
                <DashboardEmployeesView>
                    <div className="dashboard_employees">
                        <img src={img1} alt="" srcset="" />
                        <img src={img2} alt="" srcset="" />
                        <img src={img3} alt="" srcset="" />
                        <img src={img4} alt="" srcset="" />
                        <img src={img5} alt="" srcset="" />
                        <span>45+</span>
                    </div>
                    <EmployeesView>
                        <p>Manage Employees</p>
                    </EmployeesView>
                </DashboardEmployeesView>
                <DashboardGraphView>
                    <div className="staff_graph">
                        <h4>Staff Performance</h4>
                        {/* <StaffChart /> */}
                        <ApexChart />
                    </div>
                    <div className="attendance_graph">
                        <h4>Time & Attendance</h4>
                        <AttendanceChart />
                    </div>
                </DashboardGraphView>
            </div>
        </DashboardView>
    );
};

export default Daashboard;
