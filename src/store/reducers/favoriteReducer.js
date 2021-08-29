import {
  DELETE_FAVORITE,
  DELETE_POKEMON,
  SET_FAVORITE,
} from "../actions/types";

const initialState = {
  favoritePokemons: [],
};

export default function favoritePokemons(state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        favoritePokemons: [...state.favoritePokemons, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favoritePokemons: state.favoritePokemons.filter(
          (item) => item.name !== action.payload
        ),
      };
    default:
      return state;
  }
}
