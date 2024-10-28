import { useState } from "react";

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [reservations, setReservations] = useState([]); 

    

    function handleChangeDate(e) {
        setDate(e.target.value);
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
        <>
            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="res-date">Choose date</label>
                    <input 
                        type="date" 
                        id="res-date" 
                        value={date} 
                        onChange={handleChangeDate}>
                    </input>
                    <p>Your date: {date}</p>

                    <label htmlFor="res-time">Choose time</label>
                    <select 
                        id="res-time" 
                        value={time} 
                        onChange={handleChangeTime}>
                        {props.availableTimes.map((availableTime, index) => (
                            <option key={index} value={availableTime}>
                                {availableTime}
                            </option>
                        ))}
                    </select>
                    <p>Your time: {time}</p>

                    <label htmlFor="guests">Number of guests</label>
                    <input 
                        type="number" 
                        placeholder="1" 
                        min={1} 
                        max={10} 
                        id="guests" 
                        value={guest} 
                        onChange={handleChangeGuest}>
                    </input>
                    <p>Your number of guests: {guest}</p>

                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={handleChangeOccasion}>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    <input type="submit" value="Submit"></input>
                </fieldset> 
            </form>

            
            <h3>Your Reservations</h3>
            <ul>
                {reservations.map((reservation, index) => (
                    <li key={index}>
                        <strong>Date:</strong> {reservation.date}, <strong>Time:</strong> {reservation.time}, 
                        <strong> Guests:</strong> {reservation.guest}, <strong>Occasion:</strong> {reservation.occasion}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default BookingForm;