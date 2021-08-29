import { combineReducers } from "redux";
import favoritePokemons from "./favoriteReducer";
import pokemonReducer from "./pokemonReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  whitelist: ["favorites"],
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  favorites: favoritePokemons,
});

export default persistReducer(persistConfig, rootReducer);
