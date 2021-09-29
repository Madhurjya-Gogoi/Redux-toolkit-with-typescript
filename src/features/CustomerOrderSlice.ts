import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface customer{
    id:string,
    name: string,
    food : string[]
}
interface AddFoodToCustomerPayload {
    food: string;
    id: string;
  }
export interface customerState {
    value: customer[];
  }

const initialState :customerState = {
    value : []
}

export const customerSlice = createSlice({
    name : "reservation",
    initialState,
    reducers : {
      addCustomer : (state, action : PayloadAction<customer>) =>{
         state.value.push(action.payload)
      },
      addFood : (state,  action : PayloadAction< AddFoodToCustomerPayload >)=>{
        state.value.map((food)=>{
            if(food.id===action.payload.id){
               food.food.push(action.payload.food)
            }
        })
      }
    }
});

export const { addCustomer, addFood} = customerSlice.actions;
export default customerSlice.reducer;