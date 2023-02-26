import styled, { keyframes } from "styled-components";
export const Tab = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const TabButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    color: ${(props) => (props.isActive ? "#4c6fff" : "#abb7c7")};
    border-bottom: ${(props) =>
        props.isActive ? "2px solid #4c6fff" : "none"};
    margin-right: 1rem;
    font-weight: 500;
`;

export const TabContent = styled.div`
    margin-top: 1rem;
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
    gap: 30px;
    justify-content: center;
    margin: 2rem 0;

    .mailboxContent {
        animation: ${slideIn} 0.5s ease-in-out;
        display: flex;
        flex-direction: column;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;

        &.show {
            opacity: 1;
        }

        .title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 400px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
        }
    }
`;
