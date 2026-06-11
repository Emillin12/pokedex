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

       <div className="mx-auto flex w-355 items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">    
            <div>
                <div className="text-xl text-black dark:text-white font-bold">Tipos de Pokémon</div>
                    <p className="text-gray-600 ">Conheça os principais tipos e suas características</p>
            </div>
        </div>

    <div className="flex grid-cols-4 gap-4 flex-wrap ">
        <div className="mx-auto flex w-100 items-center gap-x-4 rounded-xl bg-yellow-300 p-6 ">
            <div> 
                <p>Elétrico</p>
                <p>Pokémons rápidos que usam ataques de eletricidade.</p>
                <div>
                    <button className="bg-yellow-400 text-white">Ex:Pikachu</button>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-100 items-center gap-x-4 rounded-xl bg-green-300 p-6 ">
            <div> 
                <p>Planta</p>
                <p>Usam energia da natureza,folhas,vinhas e sementes.</p>
                <div>
                    <button className="bg-green-500">Ex:Bulbasaur</button>
                </div>
            </div>
        </div>


        <div className="mx-auto flex w-100 items-center gap-x-4 rounded-xl bg-red-300 p-6 ">
            <div>         
                <p>Fogo</p>
                <p>Possuem ataques quentes,intensos e explosivos.</p>
                <div>
                    <button className="bg-red-500">Ex:Charmander</button>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-100 items-center gap-x-4 rounded-xl bg-blue-300 p-6 ">
            <div> 
                <p>Água</p>
                <p>São versáteis e usam jatos de água em batalha.</p>
                <div>
                    <button className="bg-blue-500">Ex:Squirtie</button>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-100 items-center gap-x-4 rounded-xl bg-sky-300 p-6 ">
            <div> 
                <p>Gelo</p>
                <p>Usam frio ,neve e congelamentocontra seus oponentes.</p>
                <div>
                    <button className="bg-sky-500">Ex:Lapras</button>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-100 items-center gap-x-4 rounded-xl bg-stone-500 p-6 ">
            <div> 
                <p>Pedra</p>
                <p>São resistentes e possuem grande força defensiva.</p>
                <div>
                    <button className="bg-stone-700">Ex:Onix</button>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-100 items-center gap-x-4 rounded-xl bg-pink-300 p-6 ">
            <div> 
                <p>Psíquico</p>
                <p>Usam poderes mentais, telecinese e enrgia psíquica.</p>
                <div>
                    <button className="bg-pink-400">Ex;Mewtwo</button>
                </div>
            </div>
        </div>

        <div className="mx-auto flex w-100 items-center gap-x-4 rounded-xl bg-fuchsia-300 p-6 ">
            <div> 
                <p>Fantasma</p>
                <p>Misteriosos , assustadores e difíceis de atingir.</p>
                <div>
                    <button className="bg-fuchsia-400">Ex:Gengar</button>
                </div>
            </div>
        </div>
    </div>






        
        
        
        
        
    
      
    </main>
  );
}
