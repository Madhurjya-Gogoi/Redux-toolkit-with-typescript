import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { addCustomer } from '../features/CustomerOrderSlice'
import { removeReservation } from '../features/ReservationSlice'
import { v4 as uuid } from "uuid";

const Reservation = () => {
    const reservation = useSelector((state: RootState) => state.reservation.value)
    const dispatch = useDispatch()
    return (
        <div >
            {
                reservation.map((user, index) => {
                    return (
                        <div onClick={() => {
                            dispatch(removeReservation(index));

                            dispatch(addCustomer({
                                id: uuid(),
                                name: user,
                                food: []
                            }))
                        }

                        }>
                            <h1 style={{ background: "black", padding: "10px", color: "white" }}
                            >{user}</h1>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default Reservation
