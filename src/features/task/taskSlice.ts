import {createSlice} from '@reduxjs/toolkit'

export interface Task {
	id: string,
	title: string,
	description: string,
	completed: boolean
}
const initialState:Task[] = [
	{
		'id': '1',
		'title': 'Taks 1',
		'description' : 'Task 1 description',
		'completed': false
	},
	{
		'id': '2',
		'title': 'Taks 2',
		'description' : 'Task 2 description',
		'completed': false
	}
]

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState: initialState,
	reducers: {
		addTask: (state, action) => {
			console.log(state,action.payload)
			return [...state, action.payload]
		}
	}
})

export const{addTask} = tasksSlice.actions
export default tasksSlice.reducer


