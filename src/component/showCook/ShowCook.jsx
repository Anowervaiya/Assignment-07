

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
                <td className="p-4">{index + 1}</td>
                <td
                  className="px-12
              "
                >
                  {recipe_name}
                </td>
                <td
                  className="px-12
              "
                >
                  {preparing_time}
                </td>
                <td
                  className="px-12
              "
                >
                  {calories}
                </td>
                <td
                  className="px-12
              "
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