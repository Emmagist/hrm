import React from "react";
import MessageComponent from "../Components/MessageComponent";
import SidebarLayout from "../Layouts/SidebarLayout";

const MessagePage = () => {
    return (
        <div>
            <SidebarLayout>
                <MessageComponent />
            </SidebarLayout>
        </div>
    );
};

export default MessagePage;
