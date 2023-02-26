import styled from "styled-components";

export const DashboardPageView = styled.div`
    display: flex;
`;

// DASHBOARD COMPONENT STYLING

export const DashboardView = styled.main`
    width: 80%;

    .DashboardContentView {
        background-color: #f7fafc;
        /* height: calc(100vh - 2rem); */
    }
`;

export const DashboardNavView = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const DashboardInputView = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    input {
        width: 80%;
        border: none;
        outline: none;
        padding: 12px 15px;
        border-radius: 10px;
        background-color: #edf2f7;
        color: #a0aec0;
        font-weight: 500;
        font-size: 14px;
    }

    .uil-search {
        position: absolute;
        right: 20px;
        cursor: pointer;
        color: #a0aec0;
    }
`;

export const DashboardEmployeesView = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    margin: 1rem 2rem;
    border-radius: 10px;
    background-color: var(--blue-color);

    .dashboard_employees {
        border: 2px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        img:nth-child(1) {
            position: absolute;
            left: 0px;
            border: 3px solid white;
            border-radius: 9999px;
            width: 3.2rem;
        }
        img:nth-child(2) {
            position: absolute;
            left: 30px;
            border: 3px solid white;
            border-radius: 9999px;
            width: 3.2rem;
        }
        img:nth-child(3) {
            position: absolute;
            left: 65px;
            border: 3px solid white;
            border-radius: 9999px;
            width: 3.2rem;
        }
        img:nth-child(4) {
            position: absolute;
            left: 100px;
            border: 3px solid white;
            border-radius: 9999px;
            width: 3.2rem;
        }
        img:nth-child(5) {
            position: absolute;
            left: 135px;
            border: 3px solid white;
            border-radius: 9999px;
            width: 3.2rem;
        }
        span {
            position: absolute;
            left: 170px;
            border: 3px solid white;
            background-color: white;
            border-radius: 9999px;
            width: 3.2rem;
            height: 3.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }
    }
`;

export const EmployeesView = styled.div`
    p {
        padding: 17px 15px;
        border-radius: 10px;
        background-color: white;
        font-weight: bolder;
        cursor: pointer;
    }
`;

export const DashboardGraphView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 0.3rem; */

    .staff_graph {
        width: 50%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        margin: 1rem 2rem;
    }

    .attendance_graph {
        width: 50%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        margin: 1rem;
    }
`;
