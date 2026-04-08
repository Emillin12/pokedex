
export function Welcome() {



  return (
    <main>
      <div className = "text-white , bg-red-600 , flex-15 " >
        <h1>Pokédex</h1>
          <tr>
          <table className="bg-red-600 , justify-self-end" >
            <th>Home</th>
            <th>Pokémons</th>
            <th>Tipos</th>
          </table>
          </tr>
    
      </div>


    <div className = " flex , text-black , rounded-xl , bg-yellow-200 , w-55 , justify-center-safe  ">
        <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
        </button>
    </div>

    <div className = " flex , text-black , rounded-xl , bg-green-300 , w-55 , justify-center-safe  ">
        <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
        </button>
    </div>

    <div className = " flex , text-black , rounded-xl , bg-red-400 , w-55 , justify-center-safe  ">
        <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
        </button>
    </div>

    <div className = " flex , text-black , rounded-xl , bg-blue-300 , w-55 , justify-center-safe  ">
        <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
        </button>
    </div>

  </main>

  );
}