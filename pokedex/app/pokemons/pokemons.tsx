import { useEffect, useState } from "react";

const API = "http://localhost:8080/pokemon";

type Pokemon = { nome: string; tipo: string };



export function Pokemons() {
  const [lista, setLista] = useState<Pokemon[]>([]);


  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");





  // GET /pokemon/lista
  function carregar() {
    fetch(`${API}/lista`)
      .then((res) => res.json())
      .then((dados) => setLista(dados));
  }




  // POST /pokemon/add
  function adicionar(e: React.FormEvent) {
    e.preventDefault();
    fetch(`${API}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, tipo }),
    }).then(() => {
      setNome("");
      setTipo("");
      carregar();
    });
  }



  // roda uma vez quando a tela abre
  useEffect(() => {
    carregar();
  }, []);





  return (
    <div>
      <h1>Pokémons</h1>
      <form onSubmit={adicionar}>
        <input
          placeholder="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          placeholder="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <button>Adicionar</button>
      </form>
      <ul>
        {lista.map((p) => (
          <li key={p.nome}>
            {p.nome} - {p.tipo}
          </li>
        ))}
      </ul>
    </div>
  );
}
