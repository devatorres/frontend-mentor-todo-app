import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { getTodos, addTodo, updateTodos } from '../Utils/LocalStorage'
import { initSortable } from '../Utils/Sortable'
import Sun from '../Assets/Images/icon-sun.svg'
import Moon from '../Assets/Images/icon-moon.svg'
import Close from '../Assets/Images/icon-cross.svg'
import INITIAL_TODOS from '../Constants/Todos'
import Todo from '../Models/Todo'

const styles = (theme) => ({
	title: {
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		marginBottom: 'var(--space-md)',

		'& img': {
			userSelect: 'none',
			cursor: 'pointer',
			transition: 'transform 250ms ease',

			'&:hover': {
				transform: 'scale(1.2)'
			},
			'&:active': {
				transform: 'scale(1)'
			}
		}
	},
	header: {
		display: 'flex',
		flexFlow: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		height: '50px',
		backgroundColor: 'var(--color-list)',
		borderRadius: 'var(--radius)',
		marginBottom: 'var(--space-md)',

		'& input[type="text"]': {
			height: '50px',
			appearance: 'none',
			border: 'none',
			color: 'var(--color-font-dark)',
			backgroundColor: 'transparent',
			boxShadow: 'inset -5px 0 6px 0 rgb(0 0 0 / 10%)',
			flexGrow: 1,

			'&:focus': {
				outline: '0'
			},
			'&:placeholder': {
				color: 'var(--color-font-soft)',
				fontSize: '0.6rem'
			}
		}
	},
	main: {
		boxShadow: '0 12px 24px -12px rgb(0 0 0 / 20%)',

		'& .todo:first-child': {
			borderRadius: 'var(--radius) var(--radius) 0 0'
		},
		'& .todo': {
			display: 'flex',
			flexFlow: 'row',
			justifyContent: 'flex-start',
			alignItems: 'center',
			width: '100%',
			padding: 'var(--space-sm) 0',
			minHeight: '50px',
			backgroundColor: 'var(--color-list)',
			borderBottom: 'solid 1px var(--color-check-inactive)',

			'&:hover img': {
				opacity: 1
			},
			'& p': {
				maxWidth: '80%',
				flexGrow: 1,
				cursor: 'grabbing'
			},
			'& img': {
				width: '16px',
				height: '16px',
				margin: '0 var(--space-sm)',
				opacity: 0,
				cursor: 'pointer',
				transition: 'opacity 150ms ease, transform 250ms ease',

				'&:hover': {
					transform: 'scale(1.2)'
				}
			}
		}
	},
	main2: {
		'& .footer-mobile': {
			display: 'none',
			flexFlow: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			height: '50px',
			backgroundColor: 'var(--color-list)',
			borderRadius: 'var(--radius)',
			marginTop: 'var(--space-sm)'
		}
	},
	footer: {
		position: 'relative',
		//display: 'flex',
		flexFlow: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: '50px',
		padding: '0 var(--space-sm)',
		backgroundColor: 'var(--color-list)',
		borderRadius: '0 0 var(--radius) var(--radius)',

		'& .filters input[type="radio"]': {
			display: 'none'
		},
		'& .filters label': {
			cursor: 'pointer',
			margin: '0 0.5rem',
			transition: 'color 250ms ease',

			'&:hover': {
				color: 'var(--color-font-dark)'
			}
		}
	},
	clear: {
		cursor: 'pointer',
		transition: 'color 250ms ease',

		'&:hover': {
			color: 'var(--color-font-dark)'
		}
	}
})

function Dashboard(props) {
	const { classes, darkMode, setDarkMode } = props
	const [todos, setTodos] = React.useState([])
	const [filter, setFilter] = React.useState('all')

	React.useEffect(() => {
		const localData = getTodos()
		setTodos(
			localData === null
				? [...INITIAL_TODOS]
				: localData.map((todo) => new Todo(todo))
		)
		initSortable()
	}, [])

	const handleLightMode = () => {
		setDarkMode(false)
		document.documentElement.setAttribute('data-theme', 'light')
	}

	const handleDarkMode = () => {
		setDarkMode(true)
		document.documentElement.setAttribute('data-theme', 'dark')
	}

	const handleAllCheckedState = (event) => {
		const todosToUpdate = [...todos].map((todo) => {
			todo.setChecked(event.target.checked)
			return todo
		})
		setTodos(todosToUpdate)
		updateTodos(todosToUpdate)
	}

	const handleCheckedState = (event) => {
		const uuid = event.target.parentNode.dataset.uuid
		const todoToUpdate = [...todos].map((todo) => {
			if (todo.getUuid() === uuid) {
				todo.setChecked(event.target.checked)
			}
			return todo
		})
		setTodos(todoToUpdate)
		updateTodos(todoToUpdate)
	}

	const handleDeleteTodo = (event) => {
		const uuid = event.target.parentNode.dataset.uuid
		const todoToDelete = [...todos].filter((todo) => todo.getUuid() !== uuid)
		setTodos(todoToDelete)
		updateTodos(todoToDelete)
	}

	const handleClearCompleted = () => {
		const todosCompleted = [...todos].filter((todo) => !todo.getChecked())
		setTodos(todosCompleted)
		updateTodos(todosCompleted)
	}

	const handleCreateTodo = (event) => {
		const IntroKey = 13
		if (event.keyCode === IntroKey) {
			if (event.target.value !== '') {
				const newTodos = [...todos, new Todo({ content: event.target.value })]
				event.target.value = '' //... reset input
				setTodos(newTodos)
				addTodo(newTodos)
			}
		}
	}

	const countTodosLeft = () =>
		[].concat(...todos).filter((todo) => !todo.getChecked()).length

	const render = () => {
		if (filter === 'active') {
			const activeTodos = [...todos].filter((todo) => !todo.getChecked())
			return activeTodos.map((todo) => todoLayout(todo))
		} else if (filter === 'completed') {
			const completedTodos = [...todos].filter((todo) => todo.getChecked())
			return completedTodos.map((todo) => todoLayout(todo))
		} else {
			return todos.map((todo) => todoLayout(todo))
		}
	}

	const todoLayout = (todo) => (
		<div className="todo" key={todo.getUuid()} data-uuid={todo.getUuid()}>
			<input
				type="checkbox"
				checked={todo.getChecked()}
				onChange={handleCheckedState}
			/>
			<p className="grabbing">{todo.getContent()}</p>
			<img src={Close} onClick={handleDeleteTodo} alt="Close Button" />
		</div>
	)

	return (
		<React.Fragment>
			<div className={classes.title}>
				<h1>TODO</h1>
				<img
					src={darkMode ? Sun : Moon}
					onClick={darkMode ? handleLightMode : handleDarkMode}
					alt="Dark Mode Button"
				/>
			</div>
			<div className={classes.header}>
				<input type="checkbox" onChange={handleAllCheckedState} />
				<input
					type="text"
					placeholder="Create a new todo..."
					onKeyUp={handleCreateTodo}
				/>
			</div>
			<div className={classes.main} id="todos">
				{render()}
			</div>
			<div className={classes.main2}>
				<div
					className={classes.footer}
					style={
						todos.length === 0 ? { display: 'none' } : { display: 'flex' }
					}>
					<span>{countTodosLeft() + ' items left'}</span>
					<div className="filters">
						<input type="radio" id="all" name="filter" defaultChecked></input>
						<label htmlFor="all" onClick={() => setFilter('all')}>
							All
						</label>
						<input type="radio" id="active" name="filter"></input>
						<label htmlFor="active" onClick={() => setFilter('active')}>
							Active
						</label>
						<input type="radio" id="completed" name="filter"></input>
						<label htmlFor="completed" onClick={() => setFilter('completed')}>
							Completed
						</label>
					</div>
					<span className={classes.clear} onClick={handleClearCompleted}>
						Clear Completed
					</span>
				</div>
			</div>
			<span
				className="footer"
				style={todos.length === 0 ? { marginTop: '10rem' } : {}}>
				{todos.length < 2 ? '' : 'Drag and drop to reorder list'}
			</span>
		</React.Fragment>
	)
}

export default withStyles(styles)(Dashboard)
