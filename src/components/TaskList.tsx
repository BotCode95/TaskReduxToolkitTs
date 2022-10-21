import React from 'react'
import {useSelector} from 'react-redux'
import { Task } from '../features/task/taskSlice'

export const TaskList = () => {
	const tasks = useSelector((state:any) => state.tasks)
	return (
		<div>{
			tasks.map((task: Task) => (
				<div key={task.id}>
					<h3>{task.title}</h3>
					<p>{task.description}</p>
				</div>
			))}</div>
	)
}
