import { Nav, Menu, NavLink } from "./NavbarStyles"

const Navbar = () => {
  return (
    <header>
        <Nav>
            <Menu>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/ToDo">ToDo</NavLink>
                </li>
                <li>
                    <NavLink to="/PokeApi">PokeSearch</NavLink>
                </li>
                
            </Menu>
        </Nav>

    </header>
  )
}

export default Navbar

