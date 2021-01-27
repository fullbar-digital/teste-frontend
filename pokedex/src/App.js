import FilterAndPaginationProvider from "./context/FilterAndPaginationContext";
import GetPokemonsProvider from "./context/GetPokemonsContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <GetPokemonsProvider>
      <FilterAndPaginationProvider>
        <Home />
      </FilterAndPaginationProvider>
    </GetPokemonsProvider>
  );
};

export default App;
