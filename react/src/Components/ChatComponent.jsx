import React from "react";
import {
    ChatHeaderView,
    ChatDivider,
    ChatBody,
    ChatMessageBox,
    ChatReceiver,
    ChatSender,
    ChatTyping,
    ChatComponentView,
} from "../css/MessageComponentStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import image1 from "../assets/Ellipse 14.png";

const ChatComponent = () => {
    return (
        <ChatComponentView>
            <ChatHeaderView>
                <div className="chatHeader__content">
                    <img
                        src={image1}
                        alt=""
                        srcset=""
                        className="ChatProfilePics"
                    />
                    <div className="chatHeader__bio">
                        <h4>Suzzy Lim</h4>
                        <span>Product designer</span>
                    </div>
                </div>
                <i className="uil uil-ellipsis-v"></i>{" "}
            </ChatHeaderView>

            <span className="conversation__text">
                Your conversation starts here
            </span>

            <ChatDivider>
                <div className="chatDivider__box">
                    <div className="chatDivider__horizon"></div>
                    <span>January 09, 2017</span>
                    <div className="chatDivider__horizon"></div>
                </div>
            </ChatDivider>

            <ChatBody>
                <ChatReceiver>
                    <p>
                        Hello i was going through the files and noticed some
                        details missing please can you assist me and review?
                    </p>
                    <div className="chatReceiver__content">
                        <img src={image1} alt="" srcset="" />
                        <span>9:48 pm</span>
                    </div>
                </ChatReceiver>

                <ChatSender>
                    <p>Oh sure thing... i`ll have a look </p>
                    <div className="chatSender__content">
                        <span>9:48 pm</span>
                        <FontAwesomeIcon
                            icon={faCheckDouble}
                            className="delivered__icon"
                        />
                    </div>
                </ChatSender>

                <ChatSender>
                    <ChatTyping>dot dot dot</ChatTyping>
                </ChatSender>
            </ChatBody>
            <ChatMessageBox>
                <div>
                    <textarea
                        name=""
                        id=""
                        cols="10"
                        rows="10"
                        placeholder="Say something..."
                    ></textarea>
                    <hr />
                    <div className="message__bottom">
                        <div className="messageBottom__icon">
                            <FontAwesomeIcon icon={faImage} />
                            <FontAwesomeIcon icon={faFaceSmile} />
                            <FontAwesomeIcon icon={faLink} />
                        </div>
                        <div>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </ChatMessageBox>
        </ChatComponentView>
    );
};

export default ChatComponent;
