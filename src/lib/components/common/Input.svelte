<script lang="ts">
	import { fly } from 'svelte/transition'
	export let label: string
	export let type: 'text' | 'password' | 'email'
	export let value: string
	export let placeholder = ''
	export let required = false
	export let error = ''
	const handleValue: svelte.JSX.FormEventHandler<HTMLInputElement> = (e) => {
		value = e.currentTarget.value
	}
</script>

<div class="flex flex-col">
	<label class="select-none text-xl">
		{label}
		<input
			class="p-2 border-2 bg-transparent transition duration-200 outline-none rounded-lg w-[100%] text-xl"
			class:error={error.length != 0}
			{value}
			{type}
			{placeholder}
			{required}
			on:input={handleValue}
		/>
		{#if error.length != 0}
			<span
				transition:fly={{ y: 20, opacity: 0.2 }}
				class="text-red-600 absolute">{error}</span
			>
		{/if}
	</label>
</div>

<style>
	.error {
		border: 0.15rem solid var(--error-color) !important;
	}
	input:hover,
	input:focus {
		@apply border-2 border-primary;
	}
</style>
