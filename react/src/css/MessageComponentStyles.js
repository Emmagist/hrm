import styled from "styled-components";

export const MessageComponentView = styled.div`
    display: flex;
    background-color: #f7fafc;
    padding: 2rem;
    gap: 2rem;
`;

export const MailBoxView = styled.section`
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    height: 79vh;
    width: 40%;
    background-color: white;
`;

export const MailBoxHeaderView = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
        color: #acb9c8;
    }

    .message__btn {
        border: 2px solid var(--blue-color);
        background-color: transparent;
        cursor: pointer;
        border-radius: 7px;
        color: var(--blue-color);
        padding: 10px 15px;
        font-size: 12px;
        font-weight: 500;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        }
    }
`;

export const MessageComponentBox = styled.main``;

// CHAT MESSAGE BOX

export const ChatHeaderView = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid #e4e8f0;

    .chatHeader__content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .chatHeader__bio {
            h4 {
                font-size: 14px;
            }

            span {
                font-size: 12px;
            }
        }

        .ChatProfilePics {
            border-radius: 9999px;
            width: 3rem;
            aspect-ratio: 1/1;
            object-fit: contain;
        }
    }
`;

export const ChatDivider = styled.div`
    padding-bottom: 1rem 2rem;

    .chatDivider__box {
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #99a9bc;

        span {
            width: max-content;
            font-size: 13px;
            padding: 0 4px;
        }
    }

    .chatDivider__horizon {
        height: 0.5px;
        width: 40%;
        background-color: #e4e8f0;
    }
`;

export const ChatBody = styled.div`
    padding: 1rem;
    height: 150px;
    overflow: scroll;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox */
`;

export const ChatMessageBox = styled.div`
    background-color: white;
    padding: 0.5rem;

    textarea {
        width: 100%;
        border-radius: 5px;
        padding: 0.5rem;
        outline: none;
        border: 2px solid #cad2db;

        &::placeholder {
            color: #61718c;
            font-weight: 500;
        }
    }

    .message__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;

        button {
            padding: 10px 15px;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 5px;
            background-color: var(--blue-color);
        }

        .messageBottom__icon {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
        }
    }
`;

export const ChatReceiver = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    p {
        padding: 1rem;
        border: 2px solid #d1d8e1;
        width: 50%;
        height: max-content;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        font-size: 14px;
        color: #545e77;
    }

    .chatReceiver__content {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        font-size: 12px;
        text-transform: uppercase;

        img {
            width: 32px;
            aspect-ratio: 1/1;
        }
    }
`;

export const ChatSender = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;

    .delivered__icon {
        color: var(--blue-color);
    }

    .chatSender__content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 0;
        font-size: 12px;
    }

    p {
        padding: 1rem;
        /* border: 2px solid #d1d8e1; */
        width: 50%;
        height: max-content;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        font-size: 14px;
        color: white;
        background-color: var(--blue-color);
    }
`;

export const ChatTyping = styled.div`
    border: 2px solid red;
`;

export const ChatBoxView = styled.section`
    width: 60%;
`;

export const ChatComponentView = styled.div`
    /* padding: 1rem; */
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    height: 79vh;
    background-color: white;

    .conversation__text {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 0;
        font-size: 13px;
        color: #99a9bc;
    }
`;
