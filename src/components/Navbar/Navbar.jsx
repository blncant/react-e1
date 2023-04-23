import styled from "styled-components"

const Nav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
padding: 2rem;
border-bottom: 1px solid black;
max-width: 1000px;
margin: 0 auto;
`
const Menu = styled.ul`
display: flex;
gap: 2rem;
list-style: none;

li{
    cursor: pointer;

}

`

const Navbar = () => {
  return (
    <header>
        <Nav>
            <Menu>
                <li>Home</li>
                <li>ToDo</li>
                <li>PokeAPI</li>
            </Menu>
        </Nav>

    </header>
  )
}

export default Navbar

