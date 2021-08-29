import { useDispatch, useSelector } from "react-redux";
import PokemonList from "../components/PokemonList";

export default function FavoritePokemonsPage() {
  const dispatch = useDispatch();
  const { favoritePokemons } = useSelector((state) => state.favorites);

  return (
    <div className="fav-pokemons">
      <h1 className="fav-pokemons__title">Favorite Pokemons</h1>
      <div className="fav-pokemons__block">
        <div className="pokemons__list">
          {favoritePokemons.map((item) => {
            return <PokemonList data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
