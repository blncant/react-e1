import React, { useState } from 'react'

const SearchPoke = ({handleSubmit}) => {
    const [pokemonInput, setPokemonInput] = useState("")

  return (
     <form onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit(pokemonInput)
        }}>
                <input
                    type="text"
                    placeholder="Pikachu..."
                    value={pokemonInput}
                    onChange={(e)=>{setPokemonInput(e.target.value)}}
                />

                <button type="submit" title="Buscar">
                    Buscar
                </button>
            </form>
  )
}

export default SearchPoke