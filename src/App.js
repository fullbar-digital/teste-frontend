import { Helmet } from "react-helmet";

import Pokedex from './components/Pokedex';
import Header from './components/Header';

import './App.scss'

const titlepage = 'Pokedéx';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titlepage}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header></Header>
      <Pokedex></Pokedex>
    </div>
  );
}

export default App;
