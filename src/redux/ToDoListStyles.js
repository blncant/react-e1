import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	gap: 10px;
`;

export const Input = styled.input`
	font-size: 15px;
`;

export const BtnAdd = styled.button`
	font-size: 15px;
	padding: 2px;
	border: none;
	margin: 10px;
`;

export const BtnDelete = styled.button`
	font-size: 12px;
	padding: 10px;
	border: none;
	margin: 10px;
`;

export const Inputs = styled.ul`
	display: flex;
	list-style: none;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`;
