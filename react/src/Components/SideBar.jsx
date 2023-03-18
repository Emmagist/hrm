import React, { useState } from "react";

import { SideBarView, LogoView, ListView } from "../css/SidebarStyles";

import { Link } from "react-router-dom";

const SideBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleListItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <SideBarView>
            <LogoView>
                <img src="" alt="logo" />
                <h3>Logo</h3>
            </LogoView>
            <div>
                <ListView>
                    <li
                        onClick={() => handleListItemClick(0)}
                        className={activeIndex === 0 ? "active" : ""}
                    >
                        <Link to="/" className="nav__link">
                            <i className="uil uil-estate"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li
                        onClick={() => handleListItemClick(1)}
                        className={activeIndex === 1 ? "active" : ""}
                    >
                        <i class="uil uil-users-alt"></i> <span>Employee</span>
                    </li>
                    <li
                        onClick={() => handleListItemClick(2)}
                        className={activeIndex === 2 ? "active" : ""}
                    >
                        <Link to="/task" className="nav__link">
                            <i class="uil uil-clipboard-notes"></i>{" "}
                            <span>Tasks</span>
                        </Link>
                    </li>
                    <li
                        className={`messages-view ${
                            activeIndex === 3 ? "active" : ""
                        }`}
                        onClick={() => handleListItemClick(3)}
                    >
                        <i class="uil uil-comment"></i> <span>Messages</span>{" "}
                        <span>8</span>
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
                        <i class="uil uil-calendar-alt"></i> <span>Events</span>
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
        </SideBarView>
    );
};

export default SideBar;
