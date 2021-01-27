import GetPokemonsProvider from "./context/GetPokemonsContext";

const App = () => {
  return (
    <GetPokemonsProvider>
      <div className="app">teste</div>
    </GetPokemonsProvider>
  );
};

export default App;
