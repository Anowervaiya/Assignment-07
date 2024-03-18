

function ShowCook({ cook, Praparing }) {
  // console.log(cook);

  return (
    <>
      {cook.map((item, index) => {
        const { recipe_name, preparing_time, calories } = item;

        
        return (
          <>
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td
                
                >
                  {recipe_name}
                </td>
                <td
                  
                >
                  {preparing_time}
                </td>
                <td
                  
                >
                  {calories}
                </td>
                <td
                  
                >
                  <button
                    className="btn bg-green-500 rounded-full"
                    onClick={() => 

                      Praparing(item) 
                    
                      
                    }
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            </tbody>

           
            
          </>
        );
      })}
    </>
  );
}
export default ShowCook;