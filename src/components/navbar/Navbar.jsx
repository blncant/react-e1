import { useSelector } from "react-redux";
import { Nav, Menu, NavLink, ToDoNav} from "./NavbarStyles"
// import { useToDoContext } from "../../context/ToDoProvider";


const Navbar = () => {
   
    const todos = useSelector((state) => state.todo);
    const isTodoListEmpty = todos.length ===0;


  return (
    <header>
        <Nav>
            <Menu>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <ToDoNav empty={isTodoListEmpty}>
                    <NavLink to="/src/redux/ToDoList">ToDo</NavLink>
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

