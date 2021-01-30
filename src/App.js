import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilterAndPaginationProvider from "./context/FilterAndPaginationContext";
import GetPokemonsProvider from "./context/GetPokemonsContext";
import PokeDetailProvider from "./context/PokeDetail";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <GetPokemonsProvider>
        <FilterAndPaginationProvider>
          <PokeDetailProvider>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/detail/:name" component={Detail} />
            </Switch>
          </PokeDetailProvider>
        </FilterAndPaginationProvider>
      </GetPokemonsProvider>
    </Router>
  );
};

export default App;
