import {
  SET_POKEMONS,
  POKEMONS_FETCH_START,
  POKEMONS_FETCH_END,
  POKEMONS_SUCCESS,
  POKEMONS_FAILURE,
  ADD_POKEMON,
  DELETE_POKEMON,
} from "../actions/types";

const initialState = {
  pokemons: [],
  loading: true,
  error: false,
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case POKEMONS_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case POKEMONS_FETCH_END:
      return {
        ...state,
        loading: false,
      };
    case POKEMONS_SUCCESS:
      return {
        ...state,
        error: false,
      };
    case POKEMONS_FAILURE:
      return {
        ...state,
        error: true,
      };
    case ADD_POKEMON:
      return {
        ...state,
        pokemons: [action.payload, ...state.pokemons],
      };
    case DELETE_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.filter(
          (pokemon) => pokemon._id != action.payload
        ),
      };
    default:
      return state;
  }
}
