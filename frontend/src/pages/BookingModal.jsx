import React, { useState, useMemo } from 'react';
import './BookingModal.css';

// A generateTimes prop már a szűrés logikáját tartalmazza
const BookingModal = ({ isOpen, onClose, trainerName, today, generateTimes, onSubmit }) => {
    
// Állapotok a modal-on belül a foglalási adatok tárolásához
const [selectedDate, setSelectedDate] = useState('');
const [selectedTime, setSelectedTime] = useState('');

// Dinamikus idősávok a kiválasztott dátum alapján
// Most már objektumok érkeznek: [{ time: '09:00', isBooked: true }, ...]
const availableSlots = useMemo(() => {
return generateTimes(selectedDate);
}, [selectedDate, generateTimes]);
    
// Kezelő a foglalás elküldésére
const handleSubmit = (e) => {
e.preventDefault();
onSubmit(selectedDate, selectedTime);
// A sikeres foglalás/üzenet után reseteljük a formot
setSelectedDate('');
setSelectedTime('');
};
    
// Ha az ablak záródik, reseteljük az adatokat is
const handleClose = () => {
setSelectedDate('');
setSelectedTime('');
onClose();
}

if (!isOpen) return null;

return (
<div className="modal-overlay" onClick={handleClose}>
<div className="booking-modal-content" onClick={e => e.stopPropagation()}>
                
<button className="modal-close-button" onClick={handleClose}>&times;</button>
                
<h1 className="modal-title">Időpontfoglalás</h1>
<h2 className="modal-subtitle">Edző: {trainerName}</h2>

<form onSubmit={handleSubmit} className="booking-form">
                    
{/* Dátum választó */}
<div className="form-group">
<label htmlFor="modal-date-picker" className="form-label-modal">1. Válaszd ki a napot:</label>
<input
id="modal-date-picker"
type="date"
className="input-field-modal"
value={selectedDate}
onChange={(e) => {
setSelectedDate(e.target.value);
setSelectedTime(''); // Dátumváltásnál az időpontot reseteljük
}}
min={today}
required
/>
</div>

{/* Időpont sávok (csak dátumválasztás után jelenik meg) */}
{selectedDate && (
<div className="form-group">
<label className="form-label-modal">2. Válaszd ki az időpontot:</label>
<div className="time-slots-grid-modal">
{availableSlots.length > 0 ? (
availableSlots.map(slot => (
<button
key={slot.time}
type="button"
// ❗ Letiltjuk a gombot, ha foglalt
disabled={slot.isBooked}
className={`time-slot-button-modal 
${selectedTime === slot.time ? 'selected' : ''}
// ❗ CSS osztály hozzáadása, ha foglalt
${slot.isBooked ? 'booked' : ''} 
`}
// ❗ Csak akkor engedjük az időpont kiválasztását, ha NEM foglalt
onClick={() => !slot.isBooked && setSelectedTime(slot.time)}
>
{slot.time}
{slot.isBooked && <span className="booked-text"> (Foglalt)</span>}
</button>
))
) : (
<p className="no-slots-modal">Ezen a napon nincsenek szabad időpontok.</p>
)}
</div>
</div>
)}

{/* Foglalás megerősítő gomb */}
<button 
type="submit" 
className="confirm-booking-button-modal"
disabled={!selectedDate || !selectedTime}
>
Foglalás megerősítése
</button>
</form>
</div>
</div>
);
};

export default BookingModal;