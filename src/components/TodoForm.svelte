<script>
	import { addTodo, loadTodos } from '../store/todoStore';
	import { user } from '../store/authStore';
	let todo = ''; // initialize empty todo
	loadTodos(); // invoke on page load list of todos from supabase

	const handleSubmit = () => {
		addTodo(todo, $user.id); // Invoke addTodo Fn
		todo = ''; // reset todo after addTodo is invoked
	};
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-sm mb-2">
		<label class="font-bold mb-2 text-grey-800" for="todo"> Todo</label>
		<input
			class="appearance-none shadow-sma border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
			type="text"
			name="todo"
			bind:value={todo}
			placeholder="Whatcha gotta do?"
		/>
	</div>
	<button
		type="submit"
		class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
		>Submit</button
	>
</form>
