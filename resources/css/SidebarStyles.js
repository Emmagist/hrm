import styled from "styled-components";

export const SideBarView = styled.div`
    box-shadow: 0px 5px 20px 0px #0000000a;
    height: 100vh;
    overflow-y: auto;
    width: 20%;
    position: relative;
    padding: 2rem 0;
    top: 0;
    left: 0;

    @media screen and (max-width: 884px) {
        display: none !important;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const LogoView = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    /* margin-bottom: 2.5rem; */
    gap: 1rem;
`;

export const ListView = styled.ul`
    border-bottom: 1px solid #f2f5f9;
    padding-bottom: 1rem;
    padding-top: 2.5rem;

    .notification-view span:nth-child(3) {
        display: flex;
        align-items: center;
        border-radius: 9999px;
        width: 2rem !important;
        width: 2rem;
        font-size: 12px;
        justify-content: center;
        width: 100%;
        background-color: #ffe6e4;
        color: #f16063;
    }
    .messages-view span:nth-child(3) {
        display: flex;
        align-items: center;
        border-radius: 9999px;
        width: 2rem !important;
        width: 2rem;
        font-size: 12px;
        justify-content: center;
        width: 100%;
        background-color: #e1e8ff;
        color: var(--blue-color);
    }

    li {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 0.5rem;
        padding: 0.7rem 1rem;
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;
        transition: opacity 0.3s ease-in-out;
        &:hover {
            /* background-color: #fbfbfb; */
            border-left: 3px solid var(--blue-color);
            transition: 0.2s ease-in-out;
            cursor: pointer;
            color: var(--blue-color) !important;
        }
    }
`;
