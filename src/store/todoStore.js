import { writable } from 'svelte/store'; // like context in React, global store

export const todos = writable([]); // initialize as empty array

export const addTodo = (text) => {
	// Update is a method that takes one argument which is a callback. The callback takes the existing store value as its argument and returns the new value to be set to the store.
	todos.update((cur) => {
		const newTodos = [...cur, { text, completed: false, id: Date.now() }];
		return newTodos;
	});
};

export const deleteTodo = (id) => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = (id) => {
	todos.update((todos) => {
		let index = -1;
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		}
		if (index !== -1) {
			todos[index].completed = !todos[index].completed;
		}
		return todos;
	});
};
