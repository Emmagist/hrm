import { useState, useEffect } from "react";
import moment from "moment";
import toast from "react-hot-toast";
import {
    EventsView,
    ModalView,
    TimeView,
    EventListView,
    NoEventView,
} from "../css/EventsStyles";

const COLORS = [
    { value: "#4c6fff", label: "#4c6fff" },
    { value: "#ffb74c", label: "#ffb74c" },
    { value: "#d04cff", label: "#d04cff" },
    { value: "#ff4ca2", label: "#ff4ca2" },
];

const initialEventState = {
    name: "",
    startTime: moment().format("hh:mm A"),
    endTime: moment().format("hh:mm A"),
    color: "#4c6fff",
};

function getTimeLabel(time) {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(hours, minutes);
    const label = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true, // Use a 12-hour format
    });
    return label;
}

function Option({ value, label }) {
    const optionStyle = {
        backgroundColor: label,
        borderRadius: "50%",
        padding: "100px",
    };

    return <option value={value} style={optionStyle}></option>;
}

const EventComponent = () => {
    const [open, setOpen] = useState(false);
    const [event, setEvent] = useState(initialEventState);
    const [date, setDate] = useState(moment());
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    const tick = () => {
        setDate(moment());
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEvent((prevEvent) => ({
            ...prevEvent,
            [name]: value,
        }));
    };

    const handleSelectChange = (e) => {
        const { value } = e.target;
        setEvent((prevEvent) => ({
            ...prevEvent,
            color: value,
        }));
    };

    const handleSave = () => {
        const { name, startTime, endTime } = event;

        if (!name) {
            toast.error("Please enter a name for the event.");
            return;
        }

        if (!startTime || !endTime) {
            toast.error("Please enter a start and end time for the event.");
            return;
        }

        if (!isValidDate(startTime) || !isValidDate(endTime)) {
            toast.error(
                "Please enter valid start and end times for the event."
            );
            return;
        }

        // add the new event to the list of events
        setEvents((prevEvents) => [...prevEvents, event]);

        setEvent(initialEventState);
        setOpen(!open);
    };

    function isValidDate(dateString) {
        const d = new Date(`1970-01-01T${dateString}:00`);
        return !isNaN(d.getTime());
    }

    return (
        <EventsView>
            <div className="events_header">
                <h4>Events</h4>
                <button onClick={handleOpen}>Create New</button>
            </div>
            <div className="events_header">
                <span>{date.format("MMMM Do")}</span>
                <span>{date.format("LT")}</span>
            </div>
            {open && (
                <ModalView className="modal">
                    <div>
                        <div className="modal_header">
                            <h5>Events</h5>
                            <div className="closeView" onClick={handleOpen}>
                                <i className="uil uil-times"></i>
                            </div>
                        </div>
                        <div className="events_header">
                            <span>{date.format("MMMM Do")}</span>
                            <span>{date.format("LT")}</span>
                        </div>
                        <div className="modal_textfield">
                            <input
                                type="text"
                                name="name"
                                placeholder="Event Name"
                                value={event.name}
                                onChange={handleInputChange}
                                className="input-field"
                                required
                            />
                            <div>
                                <select
                                    name="color"
                                    value={event.color}
                                    onChange={handleSelectChange}
                                    required
                                    className="select-field"
                                >
                                    {COLORS.map(({ value }) => (
                                        <Option
                                            key={value}
                                            value={value}
                                            label={value}
                                        />
                                    ))}
                                </select>
                                {event && (
                                    <div
                                        className="color-preview"
                                        style={{
                                            backgroundColor: event.color,
                                        }}
                                    ></div>
                                )}
                            </div>
                        </div>
                        <TimeView>
                            <i className="uil uil-clock"></i>
                            <input
                                type="time"
                                name="startTime"
                                id=""
                                placeholder="10:00 am"
                                value={event.startTime}
                                onChange={handleInputChange}
                                required
                            />
                            <span>to</span>
                            <input
                                type="time"
                                name="endTime"
                                id=""
                                placeholder="11:00 am"
                                value={event.endTime}
                                onChange={handleInputChange}
                                required
                            />
                        </TimeView>
                        <div className="savebtn">
                            <button onClick={handleSave} className="savebtn">
                                Save event
                            </button>
                        </div>
                    </div>
                </ModalView>
            )}
            <>
                {events.length > 0 ? (
                    <EventListView>
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="event_listContent"
                                style={{
                                    borderLeft: `3px solid ${event.color}`,
                                }}
                            >
                                <div className="event_time">
                                    <p>{getTimeLabel(event.startTime)}</p> -{" "}
                                    <p>{getTimeLabel(event.endTime)}</p>
                                </div>
                                <p> {event.name}</p>
                            </div>
                        ))}
                    </EventListView>
                ) : (
                    <NoEventView>
                        There are currently no scheduled events. Please create a
                        new event by clicking the 'Create New' button.
                    </NoEventView>
                )}
            </>
        </EventsView>
    );
};

export default EventComponent;
