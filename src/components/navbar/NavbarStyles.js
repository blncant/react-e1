import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 2rem;
	border-bottom: 1px solid black;
	max-width: 1000px;
	margin: 0 auto;
`;

export const Menu = styled.ul`
	display: flex;
	gap: 2rem;
	list-style: none;
`;

export const NavLink = styled(Link)`
	color: white;
	padding: 1rem 1.5rem;
	text-decoration: none;
	color: white;
	cursor: pointer;

	&.active {
		color: yellow;
	}
`;
