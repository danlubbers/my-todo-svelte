<script>
	import '../app.css';
	import { supabase } from '../supabase.js';
	import { user } from '../store/authStore';
	import Navbar from '../components/Navbar.svelte';
	import Auth from '../components/Auth.svelte';
	import { loadTodos } from '../store/todoStore.js';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user);
		if (sessions?.user) {
			loadTodos();
		}
	});
</script>

<!-- The Container -->
<!-- A wrapper for all of the children in the app -->
<div class="container mx-auto my-6 max-w-lg px-5">
	{#if $user}
		<Navbar />
		<!-- slot is sveltes version of a child -->
		<slot />
	{:else}
		<Auth />
	{/if}
</div>
