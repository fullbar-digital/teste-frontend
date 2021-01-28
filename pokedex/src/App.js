import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import FilterAndPaginationProvider from "./context/FilterAndPaginationContext";
import GetPokemonsProvider from "./context/GetPokemonsContext";
import PokemonDetailProvider from "./context/PokemonDetailContext";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>

    <GetPokemonsProvider>
      <FilterAndPaginationProvider>
        <PokemonDetailProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={Detail} />
          </Switch>
        </PokemonDetailProvider>
      </FilterAndPaginationProvider>
    </GetPokemonsProvider>
    </Router>
  );
};

export default App;
