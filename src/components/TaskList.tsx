import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask, Task } from '../features/task/taskSlice'

export const TaskList = () => {
	const tasks = useSelector((state: any) => state.tasks)
	const dispatch = useDispatch()
	const handleDelete = (id: string) => {
		dispatch(deleteTask(id))
	}
	return (
		<div className='w-4/6'>
			<header className='flex justify-between items-center py-4'>
				<h1>Tasks {tasks.length}</h1>
				<Link to='/create-task' className='bg-indigo-800 px-2 py-1 roundend-sm text-sm'>Create Task</Link>
			</header>
			<div className='grid grid-cols-3 gap-3'>
				{tasks.map((task: Task) => (
					<div key={task.id} className='bg-neutral-800 rounded-md p-4'>
						<header className='flex justify-between'>
							<h3>{task.title}</h3>
							<div className='flex gap-x-2'> 
								<Link className='bg-zinc-600 px-2 py-1 text-xs rounded-md' to={`/edit-task/${task.id}`}>Editar</Link>
								<button className='bg-red-500 px-2 py-1 text-xs  rounded-md' onClick={() => handleDelete(task.id)}>Eliminar</button>
							</div>
						</header>
						<p>{task.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}