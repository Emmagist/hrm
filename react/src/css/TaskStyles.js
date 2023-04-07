import styled from "styled-components";

export const TaskView = styled.section`
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

export const TaskHeaderView = styled.nav`
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
        position: static;
        box-shadow: none;
        margin-bottom: 1rem;
        z-index: 0;
        padding: 0.5rem;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
    }

    @media screen and (max-width: 884px) {
        position: static;
        box-shadow: none;
        margin-bottom: 1rem;
        z-index: 0;
    }
`;

export const TaskCardView = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;

    @media screen and (max-width: 884px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const TaskCardComponentView = styled.div`
    width: 250px;
    height: 100%;
    background-color: white;
    border-radius: 4px;
    padding: 1rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &:hover {
        transform: translateY(-2px);
    }

    @media screen and (max-width: 884px) {
        width: 100%;
    }
`;

export const TaskButton = styled.button`
    border: none;
    background-color: var(--blue-color);
    cursor: pointer;
    border-radius: 7px;
    color: white;
    padding: 10px 15px;
    font-weight: 500;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
`;

export const TaskGraphView = styled.div`
    margin: 1.5rem 2rem;
    padding: 1.5rem 2rem;

    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    h4 {
        margin-bottom: 1rem;
    }
`;

export const TaskModalView = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease-in-out, visibility 0s linear 0.3s;
`;

export const TaskFormView = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;

        button {
            background-color: transparent;
            border-radius: 5px;
            border: 1px solid #aebac9;
            color: #aebac9;
            cursor: pointer;
        }
    }

    form {
        .button__form {
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;

            button {
                padding: 10px 15px;
                border-radius: 5px;
                background-color: var(--blue-color);
                color: white;
                border: none;
                cursor: pointer;
            }
        }
        .task_formcontent {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;

            label {
                font-size: 13px;
            }

            input,
            select,
            textarea {
                width: 100%;
                padding: 10px 15px;
                border-radius: 5px;
                margin: 0.5rem 0;
                outline: none;
                border: 2px solid #a0aec0;
                color: #a0aec0;

                &::placeholder {
                    color: #a0aec0;
                }
            }
        }
    }
`;
