import React, { useState, useEffect } from "react";
import senderImage from "../assets/Ellipse 14.png";
import { MailboxContentView } from "../css/MailboxStyles";

const MailboxContent = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    return (
        <MailboxContentView>
            <img src={senderImage} alt="Profile picture of Suzzy Lim" />
            <div className={`mailboxContent ${showContent ? "show" : ""}`}>
                <div className="title">
                    <p>
                        Suzzy Lim - <span>1hr ago</span>
                    </p>
                    <p>Product designer</p>
                </div>
                <div>
                    <p className={`mail_text ${showContent ? "show" : ""}`}>
                        Hello, I was going through the files and noticed that
                        some important details are missing. I need to know the
                        exact dates of the meetings and the attendees' names. It
                        is crucial that we have this information for our
                        upcoming presentation. Can you please send me an update
                        as soon as possible? Thank you.
                    </p>
                </div>
            </div>
        </MailboxContentView>
    );
};

export default MailboxContent;
