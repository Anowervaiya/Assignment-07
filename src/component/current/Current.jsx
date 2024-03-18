function Currrent({ currentCook }) {
  console.log(currentCook);

  return (
    <>
      {currentCook.map(item => {
        const { recipe_id, calories, preparing_time, recipe_name } = item;
      
      
        return (
          <>
            <tbody>
              <tr >
                <td className="py-4">{recipe_id}</td>
                <td className="py-4">{recipe_name}</td>
                <td className="py-4">{preparing_time}</td>
                <td className="py-4">{calories}</td>
              </tr>
            </tbody>
          </>
        );
      
      
      })
      
      }
    
      
    </>
  );
}

export default Currrent;
