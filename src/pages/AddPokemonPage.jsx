import { useState } from "react";
import { fetchAddPokemon } from "../store/actions/pokemon";
import { useDispatch } from "react-redux";

export default function AddPokemonPage() {
  const dispatch = useDispatch();

  let [addForm, setAddForm] = useState({});

  const handleChange = (e) => {
    setAddForm({
      ...addForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: addForm.name,
      description: addForm.description,
      image: addForm.image,
    };

    dispatch(fetchAddPokemon(body));
    alert("Added new Pokemon");
  };

  return (
    <div className="add-pokemon">
      <div className="add-pokemon__title">Add New Pokemon</div>
      <form className="add-pokemon__form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={addForm.name}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={addForm.description}
          onChange={handleChange}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          value={addForm.image}
          onChange={handleChange}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}
