import React, { ChangeEvent, FormEvent, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../features/task/taskSlice'
import {v4 as uuid} from 'uuid'
export const TaskForm = () => {

	const [task, setTask] = useState({title:'', description: ''})

	const dispatch = useDispatch()

	const handleChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>):void => {
		setTask({...task, [e.target.name] : e.target.value })
	}

	const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(addTask({...task, id: uuid()}))
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name='title' placeholder='title' onChange={handleChange} />
			<textarea name="description" id="" placeholder='description' onChange={handleChange}></textarea>
			<button type='submit'>Guardar</button>
		</form>
	)
}
