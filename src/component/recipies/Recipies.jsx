import { useState } from 'react';
import CardContainer from '../card-container/CardContainer';
import { useEffect } from 'react';
import ShowCook from '../showCook/ShowCook';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Recipies() {
  const [cook, setCook] = useState([]);
  const [totalCook, setTotalCook] = useState(0);

  const [cardContainer, setcardContainer] = useState([]);

  useEffect(() => {
    const cardFetching = async () => {
      const responsive = await fetch('public/recipies.json');
      const data = await responsive.json();
      setcardContainer(data);
    };
    cardFetching();
  }, []);

  
  // praparing button 
  const Praparing = item => {
   
    
    const deleted = cook.filter(dltItem => dltItem.recipe_id != item.recipe_id)
    if (deleted) {
      setTotalCook(totalCook - 1);
      setCook(deleted);
    }
    
  };

  // handleCook button 
  const handleCook = handleCook => {
    
    const id = cook.find(item => {
      return item.recipe_id == handleCook.recipe_id;
    });
    if (!id) {
      const newHandleCook = [...cook, handleCook];

      setCook(newHandleCook);
      setTotalCook(totalCook + 1);
    } else {
      toast.warning('this is already cooked');
    }
  };


  return (
    <div className=" my-24 text-center">
      {/* recipies description  */}
      <div>
        <h1 className="text-2xl lg:text-5xl font-bold mb-10">Our Recipes</h1>
        <p className="text-xl font-semibold text-gray-500 lg:w-1/2 mx-auto">
          Spaghetti Carbonara: Classic Italian pasta with creamy sauce and
          bacon. Chicken Tikka Masala: Tender chicken in rich tomato sauce.
          Vegetable Stir-Fry: Colorful veggies stir-fried. Grilled Salmon: Juicy
          fish with herbs
        </p>
      </div>
      {/* card container with show section */}
      <div className="flex flex-col lg:flex-row  justify-around gap-x-4">
        {/*  card container */}
        <div className=" text-center">
          <CardContainer
            cardContainer={cardContainer}
            handleCook={handleCook}
          ></CardContainer>
        </div>

        {/* show card  */}
        <div className="mt-[60px]  border-2 flex-1  rounded-xl">
          <h1 className="text-2xl font-bold my-8">Want to cook: {totalCook}</h1>
          <hr />
          <thead className="text-center">
            <tr className='flex justify-center items-center'>
              <th></th>
              <th className="px-12">Name</th>
              <th className="px-12">Time</th>
              <th className="px-12"> Calories</th>
              <th></th>
            </tr>
          </thead>

          <ShowCook Praparing={Praparing} cook={cook}></ShowCook>
        </div>
      </div>
    </div>
  );
}
export default Recipies;
