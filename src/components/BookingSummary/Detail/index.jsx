export const Detail = (props) => {
    const {number, dates, guests, services, roomTotal, checkIn, checkOut} = props

    return (
        <div className="summary__detail">
            <h3>Detail rezervace</h3>
            <div className="summary__number">Číslo: {number}</div>
            <div className="summary__dates">Pobyt: {dates} </div>
            <div className="summary__guests">Hosté: {guests}</div>
            <div className="summary__services">Stravovávní: {services}</div>
            <div className="summary__room-total">{roomTotal}</div>
            <div className="summary__check-in">Check-in: {checkIn}</div>
            <div className="summary__check-out">
            Check-out: {checkOut}
            </div>
        </div>
    )
}