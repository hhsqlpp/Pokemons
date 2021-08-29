import { Link } from "react-router-dom";
import PokemonLogo from "../assets/Pokemon-Logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src={PokemonLogo} alt="Logotype" width="125px" />
        </Link>
        <nav className="header__nav">
          <Link to="/">Pokemons</Link>
          <Link to="/fav-pokemons">Favorite Pokemons</Link>
          <Link to="/add-pokemon">Add Pokemon</Link>
        </nav>
      </div>
    </header>
  );
}
