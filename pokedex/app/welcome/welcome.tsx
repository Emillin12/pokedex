export function Welcome() {
  return (
    <main className="bg-red-200 , h-500 ">
      <div className="text-white , bg-red-600 , flex , p-7 ,">
        <h1>Pokédex</h1>

        <div>
          <tr>
            <table className="bg-red-600 , justify-between,   ">
              <th>Home</th>
              <th>Pokémons</th>
              <th>Tipos</th>
            </table>
          </tr>
        </div>
      </div>

      <div className=" flex , justify-between">
        
        <input
          type="text"
          placeholder="  "
          className=" justify-items-center , flex , rounded-xl , bg-white , w-400 , h-15 , m-10 , items-center"
        />
           <button className="bg-red-500 , rounded-xl , h-8 , w-15 , m-15">
                 <h1>Buscar</h1>
            </button>
      </div>
        
       

      <div className=" grid-cols-4, flex ,flex-col , justify-around , cursr-pointer,">
        <div className=" flex , text-black , rounded-xl , bg-yellow-200 , w-55 , justify-center-safe , hover:bg-amber-400 , transition delay-150 , duration-300 ,  hover:-translate-y-1 , hover:scale-110 ">
          <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
          </button>
        </div>

        <div className=" flex , text-black , rounded-xl , bg-green-300 , hover:bg-green-500 , w-55 , justify-center-safe ,  transition delay-150 , duration-300 ,  hover:-translate-y-1 , hover:scale-110 ">
          <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
          </button>
        </div>

        <div className=" flex , text-black , rounded-xl , bg-red-400 , hover:bg-red-600 , w-55 , justify-center-safe , transition delay-150 , duration-300 ,  hover:-translate-y-1 , hover:scale-110 ">
          <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
          </button>
        </div>

        <div className=" flex , text-black , rounded-xl , w-55 , hover:bg-blue-700 , justify-center-safe , bg-blue-400 , transition delay-150 , duration-300 , ease-in-out , hover:-translate-y-1 hover:scale-110  ">
          <button className=" py-20 , ">
            <h1>Pikachu</h1>
            <h1>Elétrico</h1>
          </button>
        </div>
      </div>

      <div className="bg-blue-900 ,  text-white , justify-center ,  flex , h-10 , ">
        <h1>Pokedéx - React + Tailwind</h1>
      </div>

      
    </main>
  );
}
