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
		addTask: (state, action) => ([...state, action.payload]),
		deleteTask : (state:any,action) => {
			return state.filter((task:Task) => task.id !== action.payload)
		},
		editTask: (state,action) => {
			const {id}= action.payload
			return state.map((task: Task) => {
				if(task.id === id){
					return action.payload
				}else {
					return task
				}
			})
		}
	}
})

export const{addTask,deleteTask, editTask} = tasksSlice.actions
export default tasksSlice.reducer


