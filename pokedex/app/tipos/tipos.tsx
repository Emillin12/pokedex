export function Tipos() {
  return (
    <main>
      
       <div className="flex flex-auto justify-between bg-linear-to-r from-red-500 to-yellow-500 p-7 ">
            <div className="text-white , font-bold , text-2xl ">
                <h1>Pokédex</h1>
            </div>

            <div className="flex p-1 gap-4 text-white cursor-pointer">
                <h1>Home</h1>
                <h1>Pokemons</h1>
                <h1>Tipos</h1>
            </div>
       </div>

       <div className=" m-4 mx-auto flex w-355 flex-col gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">    
            <div>
                <div className="flex justify-center text-xl text-black dark:text-white font-bold">Tipos de Pokémon</div>
                    <p className="flex justify-center text-gray-600  ">Conheça os principais tipos e suas características</p>
            </div>
        </div>

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 m-5 p-5   ">
        <div className="mx-auto flex w-90 items-center gap-x-4 rounded-xl bg-yellow-300 p-15 m-10">
            <div> 

                <h1 className = "text-center text-x1 font-medium text-black dark-text-waite">⚡</h1>
                <p className = "text-center m-2">Elétrico</p>
                <p className = "text-center m-2"> Pokémons rápidos que usam ataques de eletricidade.</p>
                <div>
                    <p className="text-center bg-yellow-400 rounded-xl p-0.2">Ex:Pikachu</p>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-90 items-center gap-x-4 rounded-xl bg-green-300 p-15 m-10 ">
            <div> 

                <h1 className = "text-center text-x1 font-medium text-black dark-text-waite">🌿</h1>
                <p className = "text-center m-2">Planta</p>
                <p className = "text-center m-5">Usam energia da natureza,folhas,vinhas e sementes.</p>
                <div>
                    <p className="text-center bg-green-500 rounded-xl">Ex:Bulbasaur</p>
                </div>
            </div>
        </div>


        <div className="mx-auto flex w-90 items-center gap-x-4 rounded-xl bg-red-300 p-15 m-10 ">
            <div>  

                <h1 className = "text-center text-x1 font-medium text-black dark-text-waite">🔥</h1>   
                <p className = "text-center m-2">Fogo</p>
                <p className = "text-center m-5">Possuem ataques quentes,intensos e explosivos.</p>
                <div>
                    <p className="text-center bg-red-500 rounded-xl">Ex:Charmander</p>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-90 items-center gap-x-4 rounded-xl bg-blue-300 p-15 m-10 ">
            <div>

                <h1 className = "text-center text-x1 font-medium text-black dark-text-waite">💧</h1> 
                <p className = "text-center m-2">Água</p>
                <p className = "text-center m-5">São versáteis e usam jatos de água em batalha.</p>
                <div>
                    <p className="text-center bg-blue-500 rounded-xl">Ex:Squirtie</p>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-90 items-center gap-x-4 rounded-xl bg-sky-300 p-15 m-10 ">
            <div> 

                <h1 className = "text-center text-x1 font-medium text-black dark-text-waite">🧊</h1>
                <p className = "text-center m-2">Gelo</p>
                <p className = "text-center m-5">Usam frio ,neve e congelamentocontra seus oponentes.</p>
                <div>
                    <p className="text-center bg-sky-500 rounded-xl">Ex:Lapras</p>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-90 items-center gap-x-4 rounded-xl bg-stone-500 p-15 m-10 ">
            <div> 

                <h1 className = "text-center text-x1 font-medium text-black dark-text-waite">🏔</h1>
                <p className = "text-center m-2">Pedra</p>
                <p className = "text-center m-5">São resistentes e possuem grande força defensiva.</p>
                <div>
                    <p className="text-center bg-stone-700 rounded-xl">Ex:Onix</p>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-90 items-center gap-x-4 rounded-xl bg-pink-300 p-15 m-10 ">
            <div> 

                <h1 className = "text-center text-x1 font-medium text-black dark-text-waite">🔮</h1>
                <p className = "text-center m-2">Psíquico</p>
                <p className = "text-center m-5">Usam poderes mentais, telecinese e enrgia psíquica.</p>
                <div>
                    <p className="text-center bg-pink-400 rounded-xl">Ex;Mewtwo</p>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-90 items-center gap-x-4 rounded-xl bg-fuchsia-300 p-15 m-10 ">
            <div> 
                <h1 className = "text-center text-x1 font-medium text-black dark-text-waite">👻</h1>
                <p className = "text-center m-2">Fantasma</p>
                <p className = "text-center m-5">Misteriosos, assustadores e difíceis de atingir.</p>
                <div>
                    <p className="text-center bg-fuchsia-400 rounded-xl">Ex:Gengar</p>
                </div>
            </div>
        </div>
    </div>

    <div className = "flex bg-blue-900 justify-center p-5">
        <footer className= "flex justfy-center text-white">pokedéx - React + Tailwind</footer>
    </div>
    
      
    </main>
  );
}
