import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

function createRow(action, taskname, team, status, assignee, progress) {
    return { action, taskname, team, status, assignee, progress };
}

const rows = [
    createRow(
        // <i className="uil uil-play-circle"></i>,
        "play",
        "Design Landing Page",
        "Product",
        "On hold",
        "Brenda Maconi",
        <div className="progress__barview">
            <div className="progress__bartop">
                <p>5%</p>
                <progress value={5} max={100} />
            </div>
            <i className="uil uil-pen"></i>
            <i className="uil uil-trash-alt"></i>
        </div>
    ),
    createRow(
        // <i class="uil uil-pause-circle"></i>,
        "pause",
        "Draft Marketing Content",
        "Copywriting",
        "In Progress",
        "5 team members",
        <div className="progress__barview">
            <div className="progress__bartop">
                <p>24%</p>
                <progress value={24} max={100} />
            </div>
            <i className="uil uil-pen"></i>
            <i className="uil uil-trash-alt"></i>
        </div>
    ),
    createRow(
        // <i class="uil uil-stop-circle"></i>,
        "stop",
        "Launch social handles",
        "Marketing",
        "In active",
        "3 team members",
        <div className="progress__barview">
            <div className="progress__bartop">
                <p>32%</p>
                <progress value={32} max={100} />
            </div>
            <i className="uil uil-pen"></i>
            <i className="uil uil-trash-alt"></i>
        </div>
    ),
    createRow(
        // <i class="uil uil-pause-circle"></i>,
        "pause",
        "Draft Marketing Content",
        "Copywriting",
        "In progress",
        "5 team members",
        <div className="progress__barview">
            <div className="progress__bartop">
                <p>24%</p>
                <progress value={24} max={100} />
            </div>
            <i className="uil uil-pen"></i>
            <i className="uil uil-trash-alt"></i>
        </div>
    ),
];

function DataTable() {
    return (
        <TableContainer
            component={Paper}
            sx={{
                margin: "2rem",
                width: "95%",
                borderRadius: "4px",
            }}
        >
            <h4 className="title__table">Tasks</h4>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            align="center"
                            sx={{
                                fontFamily: "Montserrat",
                                color: "#aebac9",
                                fontSize: "13px",
                                fontWeight: "500",
                            }}
                        >
                            ACTION
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{
                                fontFamily: "Montserrat",
                                color: "#aebac9",
                                fontSize: "13px",
                                fontWeight: "500",
                            }}
                        >
                            TASK NAME
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{
                                fontFamily: "Montserrat",
                                color: "#aebac9",
                                fontSize: "13px",
                                fontWeight: "500",
                            }}
                        >
                            TEAM
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{
                                fontFamily: "Montserrat",
                                color: "#aebac9",
                                fontSize: "13px",
                                fontWeight: "500",
                            }}
                        >
                            STATUS
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{
                                fontFamily: "Montserrat",
                                color: "#aebac9",
                                fontSize: "13px",
                                fontWeight: "500",
                            }}
                        >
                            ASSIGNEE
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{
                                fontFamily: "Montserrat",
                                color: "#aebac9",
                                fontSize: "13px",
                                fontWeight: "500",
                            }}
                        >
                            PROGRESS
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                borderRadius: "4px",
                                margin: "1rem",
                                backgroundColor: "#fafafb",
                            }}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {row.action === "play" && (
                                    <i className="uil uil-play-circle play"></i>
                                )}
                                {row.action === "pause" && (
                                    <i className="uil uil-pause-circle pause"></i>
                                )}
                                {row.action === "stop" && (
                                    <i className="uil uil-stop-circle stop"></i>
                                )}{" "}
                            </TableCell>

                            <TableCell
                                align="center"
                                sx={{
                                    fontFamily: "Montserrat",
                                    color: "#425466",
                                    fontSize: "13px",
                                    fontWeight: "500",
                                }}
                            >
                                {row.taskname}
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    fontFamily: "Montserrat",
                                    color: "#425466",
                                    fontSize: "13px",
                                    fontWeight: "500",
                                }}
                            >
                                {row.team}
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    fontFamily: "Montserrat",
                                    color: "#f2a632",
                                    fontSize: "13px",
                                    fontWeight: "500",
                                }}
                                style={{
                                    color:
                                        row.status === "On hold"
                                            ? "#f2a632"
                                            : row.status === "In Progress"
                                            ? "#60d338"
                                            : row.status === "In active"
                                            ? "#f16063"
                                            : "",
                                }}
                            >
                                {row.status}
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    fontFamily: "Montserrat",
                                    color: "#425466",
                                    fontSize: "13px",
                                    fontWeight: "500",
                                }}
                            >
                                {row.assignee}
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    fontFamily: "Montserrat",
                                    color: "#425466",
                                    fontSize: "13px",
                                    fontWeight: "500",
                                }}
                            >
                                {row.progress}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable;
