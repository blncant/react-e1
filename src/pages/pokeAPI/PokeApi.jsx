import React from 'react'
import styled from "styled-components";

export const Contenedor = styled.div`
	display: flex;
    flex-direction: column;
	align-items: center;
	padding: 5rem;
    gap: 10px;
`;

function PokeApi() {
  return (
    <Contenedor>
            <h3>PAGINA EN CONSTRUCCION</h3>
            <h3>(PROXIMAMENTE)</h3>
            <form>
                <input
                    type="text"
                    placeholder="Pikachu..."
                />

                <button title="Buscar">
                    Buscar
                </button>
            </form>
    </Contenedor>
  )
}

export default PokeApi