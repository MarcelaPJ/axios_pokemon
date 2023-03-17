import { useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [ pokemones, setPokemones ] = useState([]);

    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")

        .then((response) => {
            setPokemones(response.data.results);
            console.log(response.data.results)
        })
        .catch((err) => {
            console.log(err);
        });
    };
    return (
        <div>
            <button onClick={ fetchPokemon }> Fetch Pokemon</button>
            <ul>{pokemones.map((pokemon, index) => {
                return <li key={index}>{pokemon.name}</li>
            })}</ul>
        </div>
    )
}
export default Pokemon;