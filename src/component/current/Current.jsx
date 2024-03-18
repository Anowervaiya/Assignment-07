function Currrent({ currentCook }) {
  console.log(currentCook);

  return (
    <>
      {currentCook.map(item => {
        const { recipe_id, calories, preparing_time, recipe_name } = item;
      
      
        return (
          <>
            <tbody>
              <tr>
                <td>{recipe_id}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
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
