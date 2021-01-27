import GetPokemonsProvider from "./context/GetPokemonsContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <GetPokemonsProvider>
      <Home />
    </GetPokemonsProvider>
  );
};

export default App;
