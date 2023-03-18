import Daashboard from "@/Components/Daashboard";
import SideBar from "@/Components/SideBar";

import { DashboardPageView, MobileNavbar } from "../../css/DashboardPageStyles";
import { ListView } from "../../css/SidebarStyles";

import React, { useState } from "react";

const DashboardPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [activeIndex, setActiveIndex] = useState(0);

    const handleListItemClick = (index) => {
        setActiveIndex(index);
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <DashboardPageView>
            {isOpen && (
                <div
                    className="overlay overlay_active"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <MobileNavbar>
                <img src="" alt="Logo" />
                <i className="uil uil-bars" onClick={toggleMenu} />
            </MobileNavbar>
            <div className={`mobileNavbar ${isOpen ? "left" : "right"}`}>
                <div className="mobile_close_header">
                    <i className="uil uil-times" onClick={toggleMenu}></i>
                </div>
                <div className="mobilenav-listview">
                    <ListView>
                        <li
                            onClick={() => handleListItemClick(0)}
                            className={activeIndex === 0 ? "active" : ""}
                        >
                            <i className="uil uil-estate"></i>
                            <span>Dashboard</span>
                        </li>
                        <li
                            onClick={() => handleListItemClick(1)}
                            className={activeIndex === 1 ? "active" : ""}
                        >
                            <i class="uil uil-users-alt"></i>{" "}
                            <span>Employee</span>
                        </li>
                        <li
                            onClick={() => handleListItemClick(2)}
                            className={activeIndex === 2 ? "active" : ""}
                        >
                            <i class="uil uil-clipboard-notes"></i>{" "}
                            <span>Tasks</span>
                        </li>
                        <li
                            className={`messages-view ${
                                activeIndex === 3 ? "active" : ""
                            }`}
                            onClick={() => handleListItemClick(3)}
                        >
                            <i class="uil uil-comment"></i>{" "}
                            <span>Messages</span> <span>8</span>
                        </li>
                        <li
                            onClick={() => handleListItemClick(4)}
                            className={activeIndex === 4 ? "active" : ""}
                        >
                            <i class="uil uil-invoice"></i> <span>Payroll</span>
                        </li>
                        <li
                            onClick={() => handleListItemClick(5)}
                            className={activeIndex === 5 ? "active" : ""}
                        >
                            <i class="uil uil-folder"></i>{" "}
                            <span>Case management</span>
                        </li>
                        <li
                            onClick={() => handleListItemClick(6)}
                            className={activeIndex === 6 ? "active" : ""}
                        >
                            <i class="uil uil-clock"></i>{" "}
                            <span>Time & Attendance</span>
                        </li>
                        <li
                            onClick={() => handleListItemClick(7)}
                            className={activeIndex === 7 ? "active" : ""}
                        >
                            <i class="uil uil-chart-growth"></i>{" "}
                            <span>Performance</span>
                        </li>
                        <li
                            onClick={() => handleListItemClick(8)}
                            className={activeIndex === 8 ? "active" : ""}
                        >
                            <i class="uil uil-calendar-alt"></i>{" "}
                            <span>Events</span>
                        </li>
                        <li
                            onClick={() => handleListItemClick(9)}
                            className={activeIndex === 9 ? "active" : ""}
                        >
                            <i class="uil uil-user-plus"></i>{" "}
                            <span>Recruitment</span>
                        </li>
                    </ListView>

                    <ListView>
                        <li
                            onClick={() => handleListItemClick(10)}
                            className={activeIndex === 10 ? "active" : ""}
                        >
                            <i class="uil uil-cog"></i>
                            <span>Settings</span>
                        </li>
                        <li
                            className={`notification-view ${
                                activeIndex === 11 ? "active" : ""
                            }`}
                            onClick={() => handleListItemClick(11)}
                        >
                            <i class="uil uil-cog"></i>
                            <span>Notification</span>
                            <span>8</span>
                        </li>
                    </ListView>

                    <ListView>
                        <li
                            onClick={() => handleListItemClick(12)}
                            className={activeIndex === 12 ? "active" : ""}
                        >
                            <i class="uil uil-user"></i>
                            <span>Account(Admin)</span>
                        </li>

                        <li
                            onClick={() => handleListItemClick(13)}
                            className={activeIndex === 13 ? "active" : ""}
                        >
                            <i class="uil uil-signout"></i>
                            <span>Logout</span>
                        </li>
                    </ListView>
                </div>
            </div>
            <SideBar />
            <Daashboard />
        </DashboardPageView>
    );
};

export default DashboardPage;
