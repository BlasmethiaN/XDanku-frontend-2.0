<script lang="ts">
	import { browser } from '$app/env'
	import 'virtual:windi.css'
</script>

{#if browser}
	<slot />
{/if}

<style>
	:global(body) {
		@apply text-default font-sans h-screen;
	}
</style>
