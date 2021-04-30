import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { getTodos, addTodo, updateTodos } from '../Utils/LocalStorage';
import { initSortable } from '../Utils/Sortable';
import Sun from '../Assets/Images/icon-sun.svg';
import Moon from '../Assets/Images/icon-moon.svg';
import Close from '../Assets/Images/icon-cross.svg';
import Todo from '../Models/Todo';

const styles = theme => ({
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
				transform: 'scale(1.2)',
			},
			'&:active': {
				transform: 'scale(1)',
			},
		},
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

		'& input[type="checkbox"]': {
			margin: '0 var(--space-sm)',
			cursor: 'pointer',
		},
		'& input[type="text"]': {
			height: '50px',
			appearance: 'none',
			border: 'none',
			color: 'var(--color-font-dark)',
			backgroundColor: 'transparent',
			boxShadow: 'inset -5px 0 6px 0 rgb(0 0 0 / 10%)',
			flexGrow: 1,

			'&:focus': {
				outline: '0',
			},
			'&:placeholder': {
				color: 'var(--color-font-soft)',
				fontSize: '0.6rem',
			},
		},
	},
	main: {
		boxShadow: '0 12px 24px -12px rgb(0 0 0 / 20%)',

		'& .todo:first-child': {
			borderRadius: 'var(--radius) var(--radius) 0 0',
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
				opacity: 1,
			},
			'& input[type="checkbox"]': {
				margin: '0 var(--space-sm)',
				cursor: 'pointer',
			},
			'& p': {
				maxWidth: '80%',
				flexGrow: 1,
				cursor: 'grabbing',
			},
			'& img': {
				width: '16px',
				height: '16px',
				margin: '0 var(--space-sm)',
				opacity: 0,
				cursor: 'pointer',
				transition: 'opacity 150ms ease, transform 250ms ease',

				'&:hover': {
					transform: 'scale(1.2)',
				},
			},
			'& input[type="checkbox"]:checked + p': {
				color: 'var(--color-line-through)',
				textDecoration: 'line-through',
			},
		},
	},
});

function Dashboard(props) {
	const { classes, darkMode, setDarkMode } = props;
	const [todos, setTodos] = React.useState([]);

	React.useEffect(() => {
		initSortable();
		const localData = getTodos();
		setTodos(localData === null ? [] : localData.map(todo => new Todo(todo)));
	}, []);

	const handleLightMode = () => {
		setDarkMode(false);
		document.documentElement.setAttribute('data-theme', 'light');
	};

	const handleDarkMode = () => {
		setDarkMode(true);
		document.documentElement.setAttribute('data-theme', 'dark');
	};

	const handleAllCheckedState = event => {
		const todosToUpdate = [...todos].map(todo => {
			todo.setChecked(event.target.checked);
			return todo;
		});
		setTodos(todosToUpdate);
		updateTodos(todosToUpdate);
	};

	const handleCheckedState = event => {
		const uuid = event.target.parentNode.dataset.uuid;
		const todoToUpdate = [...todos].map(todo => {
			if (todo.getUuid() === uuid) {
				todo.setChecked(event.target.checked);
			}
			return todo;
		});
		setTodos(todoToUpdate);
		updateTodos(todoToUpdate);
	};

	const handleDeleteTodo = event => {
		const uuid = event.target.parentNode.dataset.uuid;
		const todoToDelete = [...todos].filter(todo => todo.getUuid() !== uuid);
		setTodos(todoToDelete);
		updateTodos(todoToDelete);
	};

	const handleCreateTodo = event => {
		const IntroKey = 13;
		if (event.keyCode === IntroKey) {
			const newTodos = [...todos, new Todo({ content: event.target.value })];
			event.target.value = ''; //... reset input
			setTodos(newTodos);
			addTodo(newTodos);
		}
	};

	return (
		<React.Fragment>
			<div className={classes.title}>
				<h1>TODO</h1>
				<img
					src={darkMode ? Sun : Moon}
					onClick={darkMode ? handleLightMode : handleDarkMode}
					alt='Dark Mode Button'
				/>
			</div>
			<div className={classes.header}>
				<input type='checkbox' onChange={handleAllCheckedState} />
				<input
					type='text'
					placeholder='Create a new todo...'
					onKeyUp={handleCreateTodo}
				/>
			</div>
			<div className={classes.main} id='todos'>
				{todos.map(todo => (
					<div className='todo' key={todo.getUuid()} data-uuid={todo.getUuid()}>
						<input
							type='checkbox'
							checked={todo.getChecked()}
							onChange={handleCheckedState}
						/>
						<p className='grabbing'>{todo.getContent()}</p>
						<img src={Close} onClick={handleDeleteTodo} alt='Close Button' />
					</div>
				))}
			</div>
			<span>Drag and drop to reorder list</span>
		</React.Fragment>
	);
}

export default withStyles(styles)(Dashboard);
