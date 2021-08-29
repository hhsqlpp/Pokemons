import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSetPokemon } from "../store/actions/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokemons() {
  const dispatch = useDispatch();
  const { pokemons, error, loading } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchSetPokemon());
  }, []);

  return (
    <div className="pokemons">
      <h1 className="pokemons__title">Pokemons</h1>
      {!error ? (
        !loading ? (
          <div className="pokemons__list">
            {pokemons.map((pokemon) => {
              return <PokemonList data={pokemon} key={pokemon._id} />;
            })}
          </div>
        ) : (
          <div>LOADING...</div>
        )
      ) : (
        <div>ERROR</div>
      )}
    </div>
  );
}
