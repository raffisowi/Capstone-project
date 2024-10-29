import { useState } from "react";

function BookingForm({availableTimes, updateTimes}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState(1);
    const [occasion, setOccasion] = useState("");
    

    

    function handleChangeDate(e) {
        const selectedDate = e.target.value;
        setDate(selectedDate);

        updateTimes(new Date(selectedDate));
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

 
    function handleSubmit(e) {
        e.preventDefault();
    
        const formData = {
            date,
            time,
            guest,
            occasion,
        };
    
        // Überprüfen, ob submitAPI verfügbar ist
        if (typeof window.submitAPI === 'function') {
            const success = window.submitAPI(formData);
            if (success) {
                alert("Reservation successful!");
            } else {
                alert("Failed to submit reservation. Please try again.");
            }
        } else {
            console.error("submitAPI is not available.");
            alert("Submission function is not available. Please try again later.");
        }
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
                        {availableTimes.map((availableTime, index) => (
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

            
            
        </>
    );
};

export default BookingForm;