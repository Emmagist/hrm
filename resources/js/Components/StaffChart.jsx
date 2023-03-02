import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: "All task",
                data: [40, 39, 50, 75, 80, 90, 89, 80, 78, 80, 79, 78],
            },
            {
                name: "Completed task",
                data: [10, 15, 30, 40, 45, 50, 52, 60, 70, 80, 90, 100],
            },
            {
                name: "Uncompleted task",
                data: [75, 70, 100, 90, 60, 55, 50, 48, 40, 27, 25, 24],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "area",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            colors: ["#b9c6ff", "#b5eba3", "#f79c9d"],
            legend: {
                position: "top",
                horizontalAlign: "left",
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            offsetY: 20,
                        },
                    },
                },
            ],
        },
    });

    return (
        <div id="chart">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height={350}
            />
        </div>
    );
};

export default ApexChart;
