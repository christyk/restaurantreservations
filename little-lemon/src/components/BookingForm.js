import { useState } from "react";

const BookingForm = ({date, availableTimes, onDateChange, submitForm}) => {
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const formStyle = {
        display: "grid",
        maxWidth: "200px",
        gap: "20px"
    };

    console.log("Booking Form")

    const getIsFormValid = () => {
        return (date && time && guests>0 && guests<11);
    };

    return (
        <>
            <div className="bookingForm">
                <h4>Book Now</h4>
                <form style={formStyle} onSubmit={submitForm}>
                    <label for="res-date">Choose date</label>
                    <input type="date" id="res-date" data-testid="res-date" required value={date.toLocaleDateString('en-CA')} onChange={onDateChange}/>

                    <label for="res-time">Choose time</label>
                    <select id="res-time" data-testid="res-time" value={time} required onChange={(e) => {setTime(e.target.value);}}>
                        {availableTimes.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <label for="guests">Number of guests</label>
                    <input type="number" value={guests} required placeholder="1-10" min="1" max="10" id="guests"
                        onChange={(e) => {setGuests(e.target.value);}}/>

                    <label for="occasion">Occasion</label>
                    <select id="occasion" value={occasion}
                        onChange={(e) => {setOccasion(e.target.value);}}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>

                    <button type="submit" data-testid="submit" aria-label="On Click" disabled={!getIsFormValid()}>Make Reservation</button>
                </form>
            </div>
        </>
    );
};

export default BookingForm;