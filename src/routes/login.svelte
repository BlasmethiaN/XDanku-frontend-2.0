<script lang="ts">
	import Logo from '$lib/components/common/Logo.svelte'
	import LoginForm from '$lib/components/index/LoginForm.svelte'
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex items-center flex-col justify-center h-full pb-80">
	<div>
		<div class="flex flex-col pb-12">
			<Logo />
			<span class="text-3xl">Log in to XDanku</span>
		</div>
		<LoginForm />
	</div>
</div>
