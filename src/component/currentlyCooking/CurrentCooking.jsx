import { useState } from "react";

function CurrentCooking({ currentCook }) {
  console.log(currentCook);
  const { recipe_name, preparing_time, calories } = currentCook;

  return (
    <>
     
      <div className="flex gap-16 ">
        <p>{recipe_name}</p>
        <p>{preparing_time}</p>
        <p>{calories}</p>
      </div>
    </>
  );
}

export default CurrentCooking;