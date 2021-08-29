import {
  ADD_POKEMON,
  DELETE_POKEMON,
  POKEMONS_FAILURE,
  POKEMONS_FETCH_END,
  POKEMONS_FETCH_START,
  POKEMONS_SUCCESS,
  SET_POKEMONS,
} from "./types";
import axios from "axios";

export function setPokemon(data) {
  return {
    type: SET_POKEMONS,
    payload: data,
  };
}

export function fetchAddPokemon(body) {
  return function (dispatch) {
    dispatch({ type: POKEMONS_FETCH_START });

    axios.post("http://localhost:5000/pokemons", body).then((res) => {
      if (res.statusText != "OK") {
        dispatch({ type: POKEMONS_FAILURE });
      } else {
        dispatch({ type: ADD_POKEMON, payload: res.data });
        dispatch({ type: POKEMONS_SUCCESS });
      }

      dispatch({ type: POKEMONS_FETCH_END });
    });
  };
}

export function fetchDeletePokemon(id) {
  return function (dispatch) {
    axios.delete("http://localhost:5000/pokemons/" + id).then((res) => {
      dispatch({ type: DELETE_POKEMON, payload: id });
    });
  };
}

export function fetchSetPokemon() {
  return function (dispatch) {
    dispatch({ type: POKEMONS_FETCH_START });

    axios.get("http://localhost:5000/pokemons").then((res) => {
      if (res.statusText != "OK") {
        dispatch({ type: POKEMONS_FAILURE });
      } else {
        dispatch(setPokemon(res.data));
        dispatch({ type: POKEMONS_SUCCESS });
      }

      dispatch({ type: POKEMONS_FETCH_END });
    });
  };
}
