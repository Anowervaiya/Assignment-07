import SingleCard from "../singleCard/SingleCard";

function CardContainer({ cardContainer, handleCook }) {
  
  return (
    <div className="grid gap-8 my-16 grid-cols-2">
      {cardContainer.map((singleCard, index) => (
        <SingleCard
          singleCard={singleCard}
          handleCook={handleCook}
         
        ></SingleCard>
      ))}
    </div>
  );
}

export default CardContainer;
