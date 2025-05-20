import './index.css'
import { Property } from './Property';
import { Room } from './Room';
import { Detail } from './Detail';
import { Services } from './Services'

export const BookingSummary = () => {
    const bookingData = {
        "property": {
            "name": " Můj pecka hotel ****",
            "adress": "Malohradské skály 347/21",
            "city": "Malohradská ves",
            "rating": '4.65'
        },
        "detail": {
            "number":'459787-745',
            "dates":'13.6.2023 - 17.6.2026',
            "guests":'2 dospělí, 1 dítě',
            "services":'žádné',
            "roomTotal":'7 200 Kč',
            "checkIn":'13.6.2023 do 18:00',
            "checkOut":'17.6.2026 do 10:00'
        }, 
        "room": {
            "name": "Prezidentský apartmán",
            "roomType": "Dvoulůžkový bez přistýlky",
            "roomPrice": "10 500 Kč / noc"
        }
    }

  return (
    <div className="summary">
      <h2>Booking Summary</h2>
      <div className="summary__head">
        <img
          className="summary__photo"
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960"
        />
        <Property 
            name = {bookingData.property.name}
            adress = {bookingData.property.adress}
            city = {bookingData.property.city}
            rating = {bookingData.property.rating}
        />

        <Room 
            name={bookingData.room.name} 
            roomType={bookingData.room.roomType}
            roomPrice={bookingData.room.roomPrice}
        />
       
      </div>
      <Detail 
        number = {bookingData.detail.number}
        dates = {bookingData.detail.dates}
        guests = {bookingData.detail.guests}
        services = {bookingData.detail.services}
        roomTotal = {bookingData.detail.roomTotal}
        checkIn = {bookingData.detail.checkIn}
        checkOut = {bookingData.detail.checkOut}
      />

      <Services />
      <div className="summary__cancal">
        <h3>Storno podmínky</h3>
        <div className="summary__cancel-text">
          <p>
            Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám
            účtována žádná částka.
          </p>
          <p>
            Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám
            účtována částka za první noc pobytu.
          </p>
        </div>
      </div>
    </div>
  );
};