import { LIST_TYPES, LIST_COPY } from '../../config'
import css from './Footer.module.css'

function Footer(props) {
	const { tasks } = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				{Object.values(LIST_TYPES).map(type => {
					const listTasks = tasks.filter(task => task.status === type)
					if (!listTasks.length) return null;
					return (
						<div key={LIST_COPY[type]}>
							{type === LIST_TYPES.BACKLOG && (
								<p>Active tasks: {listTasks.length}</p>
							)}
							{type === LIST_TYPES.FINISHED && (
								<p>Finished tasks: {listTasks.length}</p>
							)}
						</div>
					)
				})}
			</div>
			<div className={css.copy}>
				Kanban board by <a href='https://github.com/No-detka' target='_blank' rel='noreferrer'> No-detka, 2024</a>
			</div>
		</footer>
	)
}

export default Footer