import { Nav, Menu, NavLink, ToDoNav } from "./NavbarStyles"
import { useToDoContext } from "../../context/ToDoProvider";


const Navbar = () => {
   
    const {items} = useToDoContext();
    const isTodoListEmpty = items.length ===0;


  return (
    <header>
        <Nav>
            <Menu>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <ToDoNav empty={isTodoListEmpty}>
                    <NavLink to="/ToDo">ToDo</NavLink>
                </ToDoNav>
                <li>
                    <NavLink to="/PokeApi">PokeSearch</NavLink>
                </li>
                
            </Menu>
        </Nav>

    </header>
  )
}

export default Navbar

