import Sortable from 'sortablejs';

export const initSortable = () => {
	const todos = document.getElementById('todos');

	new Sortable(todos, {
		handle: '.grabbing',
		animation: 150,
		ghostClass: 'ghost',
	});
};
