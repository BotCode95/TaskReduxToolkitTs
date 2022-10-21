import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate,useParams} from 'react-router-dom'
import { addTask, Task,editTask} from '../features/task/taskSlice'
import {v4 as uuid} from 'uuid'
export const TaskForm = () => {

	const [task, setTask] = useState({title:'', description: ''})

	const navigate = useNavigate()
	const {id} = useParams()
	const dispatch = useDispatch()
	const tasks = useSelector((state:any) => state.tasks)

	const handleChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>):void => {
		setTask({...task, [e.target.name] : e.target.value })
	}

	const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if(id){
			dispatch(editTask(task))

		}else{
			dispatch(addTask({...task, id: uuid()}))

		}
		navigate('/')
	}
	
	useEffect(() => {
		if(id) {
			setTask(tasks.find((task: Task) => task.id===id))
		}
	}, [id,tasks])
	
	return (
		<form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4 mb-2'>
			<label htmlFor="title" className='block text-xs font-bold mb-2'>Tarea</label>
			<input 
				className='w-full p-2 rounded-md bg-zinc-600 mb-2'				type="text" name='title' placeholder='title' onChange={handleChange} value={task.title}/>
			<label htmlFor="description" className='block text-xs font-bold mb-2'>Descripción</label>
			<textarea name="description" id="" placeholder='description'
				className='w-full p-2 rounded-md bg-zinc-600 mb-2' onChange={handleChange} value={task.description}></textarea>
			<button type='submit'>Guardar</button>
		</form>
	)
}
