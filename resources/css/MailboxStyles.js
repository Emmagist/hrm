import styled, { keyframes } from "styled-components";
export const Tab = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const TabButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 14px;
    cursor: pointer;
    color: ${(props) => (props.isActive ? "#4c6fff" : "#abb7c7")};
    border-bottom: ${(props) =>
        props.isActive ? "2px solid #4c6fff" : "none"};
    margin-right: 1rem;
    font-weight: 500;
`;

export const TabContent = styled.div`
    margin-top: 0.5rem;
    height: 200px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(50%);
  }

  to {
    transform: translateY(0%);
  }
`;

export const MailboxContentView = styled.article`
    display: flex;
    align-items: flex-start;
    gap: 5px;
    justify-content: flex-start;
    margin: 1rem 0;
    overflow: hidden;

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    .mailboxContent {
        animation: ${slideIn} 0.5s ease-in-out;
        display: flex;
        flex-direction: column;
        opacity: 0;
        width: 100%;
        transition: opacity 0.5s ease-in-out;

        &.show {
            opacity: 1;
        }

        .title {
            display: flex;
            align-items: center;
            /* justify-content: space-between; */
            gap: 45px;
            margin-bottom: 0.5rem;
            font-size: 13px;
            animation: ${fadeIn} 0.5s ease-in-out;

            p:nth-child(1) {
                font-weight: 700;

                span {
                    color: #a0aec0;
                }
            }
        }

        .mail_text {
            font-weight: 500;
            font-size: 11px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 400px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            @media (min-width: 320px) and (max-width: 767px) {
                max-width: 250px;
            }
        }
    }
`;

export const InboxTabView = styled.div`
    max-height: 200px;
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
`;
