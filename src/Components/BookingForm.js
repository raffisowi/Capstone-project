import { useState } from "react";
import '../styles/Reservation.css';


function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [reservations, setReservations] = useState([]); 


    function handleChangeDate(e) {
        const selectedDate = e.target.value;
        setDate(selectedDate);


        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    }


    function handleChangeTime(e) {
        setTime(e.target.value);
    }

    function handleChangeGuest(e) {
        setGuest(e.target.value);
    }

    function handleChangeOccasion(e) {
        setOccasion(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newReservation = {
            date,
            time,
            guest,
            occasion
        };

        setReservations((prevReservations) => [...prevReservations, newReservation]);

        setDate("");
        setTime("");
        setGuest(1);
        setOccasion("");

};

    return (
        <><>
            <h1 className="title">Booking Form</h1>
            <form onSubmit={handleSubmit} className="bookingForm">

                    <div className="booking-item">
                        <label htmlFor="res-date">Date</label>
                        <input
                            type="date"
                            className="input"
                            value={date}
                            onChange={handleChangeDate}
                            placeholder="Date">

                        </input>
                    </div>

                    <div className="booking-item">
                        <label htmlFor="res-time">Time</label>
                        <select
                            className="input"
                            value={time}
                            onChange={handleChangeTime}>
                            {availableTimes.map((availableTime, index) => (
                                <option key={index} value={availableTime}>
                                    {availableTime}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="booking-item">
                        <label htmlFor="guests">Number of guests</label>
                        <input
                            type="number"
                            placeholder="1"
                            min={1}
                            max={10}
                            className="input"
                            value={guest}
                            aria-label="On Click"
                            onChange={handleChangeGuest}>
                        </input>
                    </div>

                    <div className="booking-item">
                        <label htmlFor="occasion">Occasion</label>
                        <select className="input"
                            value={occasion}
                            onChange={handleChangeOccasion}>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>

                    </div>
                    <input type="submit" value="Submit" id="submit-btn"></input>

            </form>
        </><h2 className="title">Your Reservations</h2><ul className="reservations">
                {reservations.map((reservation, index) => (
                    <li key={index}>
                        <strong>Date:</strong> {reservation.date},
                        <strong>Time:</strong> {reservation.time},
                        <strong> Guests:</strong> {reservation.guest},
                        <strong>Occasion:</strong> {reservation.occasion}
                    </li>
                ))}
            </ul></>

    );
}

export default BookingForm;