import React, { useState } from 'react'
import axios from 'axios'
import {Contenedor, ErrorStyled} from "./PokeApiStyles"
import SearchPoke from './SearchPoke'

function PokeApi() {

    const [pokemonData, setPokemonData] = useState(null)
    const [error, setError] = useState(null)

    const handleSubmit = async(pokemonInput) => {
        
        setPokemonData(null)
        setError(null)

        try{
            let selectedPokemon = pokemonInput.toLowerCase().trim()
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
            setPokemonData (res.data)
            
        } catch (error){
            
            setError("Pokemon no encontrado, volver a buscar")
        }
    }

  return (
    <Contenedor>
            <h3>BUSCAR UN POKEMON</h3>
            <SearchPoke handleSubmit={handleSubmit}/>
           
            {error && <ErrorStyled>{error}</ErrorStyled>}
            {pokemonData && (
                <div>
                    
                    <img src={pokemonData.sprites.front_default} alt="" />
                    <h2>{pokemonData.name}</h2>
                </div>
            )
            }


    </Contenedor>
  )
}

export default PokeApi