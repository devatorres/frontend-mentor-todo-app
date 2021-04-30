//@ Array<todos> | null
export const getTodos = () => {
	try {
		return JSON.parse(localStorage.getItem('todos'));
	} catch (e) {
		return null;
	}
};

export const addTodo = todos => {
	try {
		localStorage.setItem('todos', JSON.stringify(todos));
	} catch (e) {
		alert('Error inesperado al crear el TODO, por favor vuelva a intentarlo.');
	}
};

export const updateTodos = todos => {
	try {
		localStorage.setItem('todos', JSON.stringify(todos));
	} catch (e) {
		alert(
			'Error inesperado al guardar la información, por favor tenga cuidado al cerrar la aplicación.'
		);
	}
};
