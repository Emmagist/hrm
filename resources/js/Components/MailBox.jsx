import React, { useState } from "react";
import {
    Tab,
    TabButton,
    TabContent,
    InboxTabView,
} from "../../css/MailboxStyles";
import MailboxContent from "./MailboxContent";

const InboxTabContent = () => {
    return (
        <InboxTabView>
            <MailboxContent />
            <MailboxContent />
            <MailboxContent />
            <MailboxContent />
        </InboxTabView>
    );
};

const SentTabContent = () => {
    return <p>This is the Sent tab content</p>;
};

const MailBox = () => {
    const [activeTab, setActiveTab] = useState("inbox");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <Tab>
                <TabButton
                    isActive={activeTab === "inbox"}
                    onClick={() => handleTabClick("inbox")}
                >
                    Inbox
                </TabButton>
                <TabButton
                    isActive={activeTab === "sent"}
                    onClick={() => handleTabClick("sent")}
                >
                    Sent
                </TabButton>
            </Tab>
            <TabContent>
                {activeTab === "inbox" ? (
                    <InboxTabContent />
                ) : (
                    <SentTabContent />
                )}
            </TabContent>
        </div>
    );
};
export default MailBox;
