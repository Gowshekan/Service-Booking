import { useParams } from "react-router-dom";
import '../App.css'
const Booking = () => {
    const {bookingId} = useParams();
    console.log(bookingId)
    return (
        <div className="all">
            <h1>Booking Page will be {bookingId}</h1>
        </div>
    );
};

export default Booking;