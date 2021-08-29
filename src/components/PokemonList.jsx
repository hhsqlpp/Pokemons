import Heart from "../assets/heart.png";
import Delete from "../assets/delete.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeletePokemon } from "../store/actions/pokemon";
import { setFavorite, deleteFavorite } from "../store/actions/favorite";

export default function PokemonList({ data }) {
  const dispatch = useDispatch();
  const { favoritePokemons } = useSelector((state) => state.favorites);

  const handleDeletePokemon = () => {
    dispatch(fetchDeletePokemon(data._id));
    alert("Pokemon deleted!");
  };

  let isFinish = false;

  const handleToggleFavorite = () => {
    favoritePokemons.map((item) => {
      if (item.name === data.name) {
        dispatch(deleteFavorite(data.name));
        alert("Deleted from Favorite Pokemons!");
        isFinish = true;
      }
    });

    if (!isFinish) {
      const favoritePokemon = {
        name: data.name,
        description: data.description,
        image: data.image,
      };

      dispatch(setFavorite(favoritePokemon));
      alert("Added to Favorite Pokemons!");
    }
  };

  return (
    <div className="pokemons__list-item">
      <img
        src={data.image}
        alt={data.name}
        className="pokemons__list-item__image"
      />
      <h2 className="pokemons__list-item__name">{data.name}</h2>
      <p className="pokemons__list-item__desc">{data.description}</p>
      <div className="actions">
        <span>
          <img src={Delete} alt="Delete" onClick={handleDeletePokemon} />
        </span>
        <span>
          <img
            src={Heart}
            alt="Toggle Favorite"
            onClick={handleToggleFavorite}
          />
        </span>
      </div>
    </div>
  );
}
