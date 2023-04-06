import React from "react";
import MailBox from "./MailBox";
import {
    MessageComponentView,
    MailBoxView,
    MailBoxHeaderView,
    MessageComponentBox,
    ChatBoxView,
} from "../css/MessageComponentStyles";
import { TaskHeaderView, TaskButton } from "../css/TaskStyles";

import { DashboardInputView } from "../css/DashboardPageStyles";
import ChatComponent from "./ChatComponent";

const MessageComponent = () => {
    return (
        <MessageComponentBox>
            <TaskHeaderView>
                <h1>Messages</h1>
                <DashboardInputView>
                    <input type="text" placeholder="Search" />
                    <i className="uil uil-search"></i>
                </DashboardInputView>
                <TaskButton>+ Create new message</TaskButton>
            </TaskHeaderView>
            <MessageComponentView>
                <MailBoxView>
                    <MailBoxHeaderView>
                        <h4>Mailbox</h4>
                        <div className="message__btn">New Message</div>
                    </MailBoxHeaderView>
                    <MailBox />
                </MailBoxView>
                <ChatBoxView>
                    <ChatComponent />
                </ChatBoxView>
            </MessageComponentView>
        </MessageComponentBox>
    );
};

export default MessageComponent;
