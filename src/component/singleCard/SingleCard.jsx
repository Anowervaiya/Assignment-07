import react from 'react';
import { MdOutlineWatchLater } from 'react-icons/md';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';

function SingleCard({ singleCard, handleCook }) {

  
  const {
    calories,
    preparing_time,
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
  } = singleCard;

  const [first, second, third, fourth] = ingredients;

  return (
    <div
      className="text-start space-y-4 border-2 p-4 
    rounded-lg"
    >
      <img className="h-[200px]  w-full rounded-lg" src={recipe_image} alt="" />
      <h1 className="text-xl font-bold">{recipe_name}</h1>
      <p>{short_description.slice(0, 40)}</p>
      <hr />

      <h1 className="text-start font-bold text-xl">
        Ingredient: {ingredients.length}
      </h1>

      <div className="text-start ml-6">
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
        <li>{fourth}</li>
      </div>
      <hr />
      {/* minute and caloris show  */}
      <div className="flex items-center gap-x-3">
        <div className="flex items-center gap-x-3 text-xl">
          <MdOutlineWatchLater></MdOutlineWatchLater>
          <p> {preparing_time.replace('min', '')} minutes</p>
        </div>
        <div className="flex items-center gap-x-3 text-xl">
          <MdOutlineLocalFireDepartment></MdOutlineLocalFireDepartment>
          <p> {calories} calories</p>
        </div>
      </div>

      <div>
        <button
          className=" p-4  bg-green-500 font-bold rounded-full hover:bg-inherit border border-green-500"
          onClick={() => handleCook(singleCard)}
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
}

export default SingleCard;
