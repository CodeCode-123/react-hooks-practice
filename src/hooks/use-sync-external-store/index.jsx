import React, { useEffect, useState, useSyncExternalStore } from "react";
import { fetchPokemons, getState, subscribe } from "./pokemonStore";

// lets components safely and efficiently subscribe to an external data store
// (data not managed by React's built-in useState or useContext) and keep the 
// UI in sync changes to that store
export const SyncExternalStoreExample = () => {
    const { pokemons } = useSyncExternalStore(subscribe, getState);

    useEffect(() => {
        fetchPokemons();
    });

    // useEffect(() => {
    //     const fetchPokemons = async () => {
    //         const response = await fetch(
    //             "https://pokeapi.co/api/v2/pokemon?limit=10"
    //         );
    //         const data = await response.json();
    //         setPokemons(data.results);
    //     };
    //     fetchPokemons();
    // }, []);

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemons.length === 0 ? (
                    <p>Loading...</p>
                ): (
                    pokemons.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)
                )}
            </ul>
        </div>
    );
};