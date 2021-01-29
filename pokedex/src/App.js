import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilterAndPaginationProvider from "./context/FilterAndPaginationContext";
import GetPokemonsProvider from "./context/GetPokemonsContext";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <GetPokemonsProvider>
        <FilterAndPaginationProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:name" component={Detail} />
          </Switch>
        </FilterAndPaginationProvider>
      </GetPokemonsProvider>
    </Router>
  );
};

export default App;
