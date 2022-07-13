<script lang="ts">
	import Input from '$lib/components/common/Input.svelte'
	import { LoginError } from '$api/user/types/login-user-reponse.dto'
	import Button from '$lib/components/common/Button.svelte'

	let formValues = { username: '', password: '' }
	let error: LoginError | null = null
</script>

<form class="flex flex-col gap-8 w-90">
	<Input
		label="Username"
		type="text"
		bind:value={formValues.username}
		placeholder="Pepan"
		required
		error={error === LoginError.WRONG_USERNAME ? 'Wrong username.' : ''}
	/>
	<Input
		label="Password"
		type="password"
		bind:value={formValues.password}
		placeholder="••••••••"
		required
		error={error === LoginError.WRONG_PASSWORD ? 'Incorrect password.' : ''}
	/>
	<div class="flex justify-end">
		<button
			class="bg-secondary text-xl p-2 rounded-2xl border-2 transition duration-200 cursor-pointer hover:(bg-primary rounded-xl)"
			>Log in</button
		>
	</div>
</form>
