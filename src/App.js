import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Pokemons from "./pages/PokemonsPage";
import FavoritePokemonsPage from "./pages/FavoritePokemonsPage";
import AddPokemonPage from "./pages/AddPokemonPage";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <main className="main">
          <div className="container">
            <Route exact path="/add-pokemon" component={AddPokemonPage} />
            <Route
              exact
              path="/fav-pokemons"
              component={FavoritePokemonsPage}
            />
            <Route exact path="/" component={Pokemons} />
          </div>
        </main>
      </Switch>
    </Router>
  );
}
