import styled from "styled-components";

export const SidebarLayoutView = styled.div`
    display: flex;

    @media screen and (max-width: 884px) {
        flex-direction: column;
        width: 100%;
    }

    .mobileNavbar {
        z-index: 999;
        position: fixed;
        display: flex;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        background-color: #e5e5e5;
        top: 0;
        padding: 1.6em;
        color: black !important;
        transition: transform 0.3s ease-in-out;

        @media (min-width: 320px) and (max-width: 768px) {
            padding: 1em;
        }

        .mobile_close_header {
            width: 38%;
            cursor: pointer;
            font-size: 30px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            color: var(--blue-color);
            transition: color 0.3s ease-in-out;

            @media (min-width: 320px) and (max-width: 768px) {
                width: 78%;
            }

            &:hover {
                color: #a0aec0;
            }
        }
    }
`;

// DASHBOARD COMPONENT STYLING

export const DashboardView = styled.main`
    width: 80%;
    overflow: scroll;
    height: calc(100vh - 1rem);

    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 884px) {
        width: 100%;
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

    @media (min-width: 320px) and (max-width: 767px) {
        padding: 1.5rem;
        position: static;
        box-shadow: none;
        margin-bottom: 1rem;
        z-index: 0;
    }

    @media screen and (max-width: 884px) {
        position: static;
        box-shadow: none;
        margin-bottom: 1rem;
        z-index: 0;
    }
`;

export const DashboardInputView = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    @media screen and (max-width: 767px) {
        width: 100%;
    }

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

        @media screen and (max-width: 767px) {
            width: 100%;
        }

        @media (min-width: 320px) and (max-width: 767px) {
            font-size: 13px;
        }

        @media screen and (max-width: 884px) {
            width: 100%;
        }
    }

    .uil-search {
        position: absolute;
        right: 20px;
        cursor: pointer;
        color: #a0aec0;

        @media (min-width: 320px) and (max-width: 767px) {
            font-size: 14px;
        }
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

    @media (min-width: 320px) and (max-width: 767px) {
        padding: 1.5rem 1rem;
        margin: 1rem;
    }

    .dashboard_employees {
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

            @media (min-width: 320px) and (max-width: 389px) {
                left: 20px;
            }

            @media (min-width: 390px) and (max-width: 428px) {
                left: 25px;
            }
        }
        img:nth-child(3) {
            position: absolute;
            left: 65px;
            border: 3px solid white;
            border-radius: 9999px;
            width: 3.2rem;

            @media (min-width: 320px) and (max-width: 389px) {
                left: 40px;
            }

            @media (min-width: 390px) and (max-width: 428px) {
                left: 50px;
            }
        }
        img:nth-child(4) {
            position: absolute;
            left: 100px;
            border: 3px solid white;
            border-radius: 9999px;
            width: 3.2rem;

            @media (min-width: 320px) and (max-width: 389px) {
                left: 60px;
            }

            @media (min-width: 390px) and (max-width: 428px) {
                left: 80px;
            }
        }
        img:nth-child(5) {
            position: absolute;
            left: 135px;
            border: 3px solid white;
            border-radius: 9999px;
            width: 3.2rem;

            @media (min-width: 320px) and (max-width: 389px) {
                left: 80px;
                display: none;
            }

            @media (min-width: 390px) and (max-width: 428px) {
                left: 110px;
            }
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

            @media (min-width: 320px) and (max-width: 389px) {
                left: 80px;
            }

            @media (min-width: 390px) and (max-width: 428px) {
                left: 140px;
            }
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

        @media (min-width: 320px) and (max-width: 389px) {
            padding: 12px 8px;
            font-size: 11px;
        }

        @media (min-width: 390px) and (max-width: 428px) {
            padding: 12px 8px;
            font-size: 11px;
        }

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

    @media (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        margin: 2rem 1rem;
    }

    h4 {
        margin-bottom: 1rem;
    }

    .attendance_graph {
        width: 50%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        background-color: white;
        border-radius: 5px;
        @media (min-width: 320px) and (max-width: 767px) {
            width: 100%;
            padding: 1rem;
        }
    }
`;

export const DashboardEventView = styled.article`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 2rem;
    gap: 1rem;
    align-content: center;

    @media (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        margin: 2rem 1rem;
    }

    .application_content {
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        padding: 2rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: white;
        border-radius: 5px;
        height: 330px;
        /* max-height: 200px; */
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: var(--blue-color) transparent;

        &::-webkit-scrollbar-track {
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--blue-color);
            border-radius: 10px;
            margin-right: 5px;
        }

        &::-webkit-scrollbar {
            width: 5px;
            max-height: 5px;
            display: none;
        }

        &:hover::-webkit-scrollbar {
            display: block;
        }

        h4 {
            margin-bottom: 1.5rem;
        }
    }

    .event_content {
        flex: 1;
        padding: 1.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: white;
        border-radius: 5px;
        /* width: 49%; */
        height: 330px;
        display: flex;
        align-items: flex-start;
    }

    .mailbox_content {
        flex: 1;
        h4 {
            margin-bottom: 1rem;
        }

        padding: 1.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: white;
        border-radius: 5px;
        overflow-y: hidden;
        height: 330px;
        /* width: 49%; */
    }
`;

export const MobileNavbar = styled.nav`
    display: none;

    .uil-bars {
        cursor: pointer;
    }

    @media screen and (max-width: 884px) {
        display: block;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        box-shadow: 0px 5px 20px 0px #0000000a;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 150;
        background-color: white;
    }
`;
