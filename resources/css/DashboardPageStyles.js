import styled from "styled-components";

export const DashboardPageView = styled.div`
    display: flex;
`;

// DASHBOARD COMPONENT STYLING

export const DashboardView = styled.main`
    width: 80%;
    overflow: scroll;
    height: calc(100vh - 2rem);

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const DashboardNavView = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);

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
    padding: 1.5rem 2rem;
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
        padding: 15px 13px;
        border-radius: 10px;
        background-color: white;
        font-weight: bolder;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.2s ease-in-out;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        }
    }
`;

export const DashboardGraphView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin: 2rem;

    h4 {
        margin-bottom: 1rem;
    }

    .staff_graph {
        /* width: 50%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        background-color: white;
        border-radius: 5px; */
    }

    .attendance_graph {
        width: 50%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        background-color: white;
        border-radius: 5px;
    }
`;

export const DashboardEventView = styled.article`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 2rem;
    gap: 1rem;
    flex-wrap: wrap;
    align-content: center;

    .application_content {
        margin: 2rem;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        padding: 2rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: white;
        border-radius: 5px;
        max-height: 335px;
        width: 50%;

        h4 {
            margin-bottom: 1rem;
        }
    }

    .event_content {
        padding: 1.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: white;
        border-radius: 5px;
        width: 49%;
        height: 335px;
        display: flex;
        align-items: flex-start;
    }

    .mailbox_content {
        h4 {
            margin-bottom: 1rem;
        }

        padding: 1.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: white;
        border-radius: 5px;
        overflow-y: hidden;
        width: 49%;
    }
`;
