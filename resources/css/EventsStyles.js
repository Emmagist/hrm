import styled from "styled-components";

export const EventsView = styled.article`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;

    .events_header:nth-child(2) {
        margin: 1rem 0;
        span {
            font-weight: 500;
        }
    }

    .events_header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            font-size: 12px;
        }

        button {
            border: 1px solid var(--blue-color);
            padding: 10px 15px;
            border-radius: 10px;
            background-color: white;
            color: var(--blue-color);
            cursor: pointer;
            font-size: 10px !important;
            font-weight: bold;
        }
    }
`;

export const ModalView = styled.div`
    width: 80%;
    position: absolute;
    top: 0;
    left: 50px;
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);

    .savebtn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem 0 0.1rem 0rem;

        button {
            background-color: var(--blue-color);
            padding: 15px 60px;
            border-radius: 5px;
            font-weight: 500;
            cursor: pointer;
            border: none;
            color: white;
        }
    }

    .modal_textfield {
        position: relative;
        .input-field {
            border: 1px solid #a0aec0 !important;
            outline: none !important;
            width: 100%;
            font-size: 10px;
            background-color: transparent;
            padding: 10px 15px;
            border-radius: 5px !important;
        }

        .select-field {
            position: absolute;
            border: none !important;
            right: 5px;
            top: 9px;
            outline: none;
            font-size: 12px;
        }
    }
    .modal_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;

        .closeView {
            border: 1px solid #a0aec0;
            padding: 1px 2px;
            cursor: pointer;
            font-size: 12px;
            border-radius: 5px;
        }
    }
`;

export const TimeView = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .uil-clock {
        font-size: 12px;
    }

    span {
        font-size: 12px;
    }

    input {
        border: none;
        font-size: 10px;
        border-bottom: 1px solid #a0aec0;
        padding: 10px 15px;
        outline: none;
    }
`;

export const EventListView = styled.div`
    .event_listContent {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        padding: 10px 15px;
        font-weight: 500;

        .event_time {
            display: flex;
            align-items: center;
            gap: 1rem;

            p {
                width: max-content;
            }
        }
    }
`;

export const NoEventView = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
