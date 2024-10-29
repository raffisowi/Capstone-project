import React, { useReducer, useEffect } from 'react';
import BookingForm from '../Components/BookingForm.js';

// Initiale Funktion für die Zeiten (leeres Array)
function initializeTimes() {
    return [];
}

// Reducer, um die Zeiten zu setzen
function updateTimes(state, action) {
    switch(action.type) {
        case 'SET_TIMES':
            return action.payload; // Setzt die neuen Zeiten
        default:
            return state;
    }
}

function Reservations() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    // useEffect, um die Anfangszeiten beim ersten Laden zu setzen
    useEffect(() => {
        const today = new Date();
    
        if (typeof window.fetchAPI === 'function') {
            window.fetchAPI(today).then(times => {
                console.log("Fetched times:", times); // Logge die Zeiten, um zu überprüfen
                dispatch({ type: 'SET_TIMES', payload: times });
            }).catch(error => console.error("Failed to fetch initial times:", error));
        } else {
            console.error("fetchAPI is not available.");
        }
    }, []);

    // updateTimesForDate-Funktion, die dispatch mit neuen Zeiten aufruft
    function updateTimesForDate(selectedDate) {
        if (typeof window.fetchAPI === 'function') {
            // Daten von fetchAPI abrufen und dann `dispatch` ausführen
            window.fetchAPI(selectedDate).then(times => {
                dispatch({ type: 'SET_TIMES', payload: times });
            }).catch(error => console.error("Failed to fetch times for selected date:", error));
        } else {
            console.error("fetchAPI is not available.");
        }
    }

    return (
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimesForDate} />
    );
}

export default Reservations;