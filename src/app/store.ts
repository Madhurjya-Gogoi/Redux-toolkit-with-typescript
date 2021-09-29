import { configureStore} from '@reduxjs/toolkit';
import customerSlice  from '../features/CustomerOrderSlice';
import reservationReducer from '../features/ReservationSlice';


export const store = configureStore({
  reducer: {
    reservation : reservationReducer ,
    customer : customerSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
