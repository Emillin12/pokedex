
export function Welcome() {



  return (
    <main>
      <div className = "text-white , bg-red-600 , flex , p-7 " >
        <h1>Pokédex</h1>

        <div>
             <tr>
                <table className="bg-red-600 , justify-between,   " >
                    <th>Home</th>
                    <th>Pokémons</th>
                    <th>Tipos</th>
                </table>
            </tr>
          </div>
    
      </div>

    <div className=" grid-cols-4, flex ,flex-col">
    <div className = " flex , text-black , rounded-xl , bg-yellow-200 , w-55 , justify-center-safe , hover:bg-amber-400   ">
        <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
        </button>
    </div>

    <div className = " flex , text-black , rounded-xl , bg-green-300 , hover:bg-green-500 , w-55 , justify-center-safe  ">
        <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
        </button>
    </div>

    <div className = " flex , text-black , rounded-xl , bg-red-400 , hover:bg-red-600 , w-55 , justify-center-safe  ">
        <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
        </button>
    </div>

    <div className = " flex , text-black , rounded-xl , bg-blue-400 , w-55 , hover:bg-blue-700 , justify-center-safe  ">
        <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
        </button>
    </div>
    </div>

  </main>

  );
}