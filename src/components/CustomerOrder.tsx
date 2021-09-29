import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/CustomerOrderSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}
const CustomerOrder = ({ id, name, food }: CustomerCardType) => {
  const [foods, setFood] = useState("");
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{name}</h1>
      {food.map((food) => (
        <p>{food}</p>
      ))}
      <input
        type="text"
        value={foods}
        onChange={(e) => setFood(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addFood({ id, food: foods }));
          setFood("");
        }}
      >
        add food
      </button>
    </div>
  );
};

export default CustomerOrder;
