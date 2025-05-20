import './index.css'

import { WindowView } from './WindowView'
export const Room = (props) => {
    const {name, roomType, roomPrice} = props

    return (
        <div className="summary__head-room">
          <h3 className="summary__name">{name}</h3>
          <div className="summary__room-type">
            {roomType}
          </div>
          <div className="summary__room-price">{roomPrice}</div>
          <WindowView viewMare={false} />
        </div>
    )
}