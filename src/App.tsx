import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerOrder from "./conponents/CustomerOrder";
import Reservation from "./conponents/Reservation";
import { addReservation } from "./features/ReservationSlice";

function App() {
  const [reservation, setReservation] = useState("");

  const dispatch = useDispatch();
  const customer = useSelector((state: RootState) => state.customer.value)
  return (
    <div className="container">
      <h2 className="container__text">Customer food order app</h2>
      <div className="container__item">
        <div>
          <Reservation />
          <input
            type="text"
            value={reservation}
            onChange={(e) => setReservation(e.target.value)}
          />
          <button
            onClick={() => {
              if (!reservation) return;
              dispatch(addReservation(reservation));
              setReservation("");
            }}
          >
            Add Reservation
          </button>
        </div>

        <div>
         {
           customer.map((customer)=>{
             return (
               <CustomerOrder id={customer.id} name= {customer.name} food={customer.food}/>
             )
           })
         }
          
        </div>
      </div>
    </div>
  );
}

export default App;
