import BookingForm from '../Components/BookingForm.js';
import { useReducer } from 'react';


// Initialisiert die Zeiten für das heutige Datum
function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

// Reducer-Funktion zum Aktualisieren der Zeiten
function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const selectedDate = new Date(action.payload);
            const dayOfWeek = selectedDate.getDay();

            // Beispiel: Verschiedene Zeiten für Wochentage (Mo-Fr) und Wochenenden (Sa-So)
            if (dayOfWeek === 0 || dayOfWeek === 6) { // Wochenende
                return ['16:00', '17:00', '18:00', '19:00', '20:00'];
            } else { // Wochentage
                return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
            }
        default:
            return state;
    }
}

function Reservations() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    

    return (
        <>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </>
    );
}

export default Reservations;