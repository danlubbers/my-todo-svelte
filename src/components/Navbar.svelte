<script>
	import Auth from './Auth.svelte';

	import { supabase } from '../supabase';

	const logout = () => {
		console.log('log out');
		supabase.auth.signOut();
	};
</script>

<div class="my-4 flex justify-end">
	<button class="shadow-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4" on:click={logout}
		>Log Out</button
	>
</div>
