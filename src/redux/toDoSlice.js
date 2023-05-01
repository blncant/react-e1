import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
	name: "todo",
	initialState: [],
	reducers: {
		addItem: (state, action) => {
			const newItem = {
				id: Math.random(),
				name: action.payload.item,
			};
			state.push(newItem);
		},

		deleteAll: () => {
			return [];
		},
	},
});

export const { addItem, deleteAll } = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
