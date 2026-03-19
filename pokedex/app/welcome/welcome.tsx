
export function Welcome() {



  return (
    <main>
      <h1> Oi Bryan!</h1>
      <button className ="border-2 border-red-300 bg-red-200 hover:cursor-pointer hover:bg-amber-50"  onClick={() => console.log("oi")}>Aperte para falar oi</button>
    </main>
  );
}