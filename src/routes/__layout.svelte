<script>
	import { supabase } from '../supabase.js';
	import '../app.css';
</script>

<!-- The Container -->
<!-- A wrapper for all of the children in the app -->
<div class="container mx-auto my-6 max-w-lg px-5">
	<!-- slot is sveltes version of a child -->
	<slot />
</div>
