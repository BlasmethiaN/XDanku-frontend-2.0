<script lang="ts">
	import Logo from '$lib/components/common/Logo.svelte'
	import Button from '$lib/components/common/Button.svelte'
	import avatarSrc from '$assets/profile_pic.jpg'
	import { fly } from 'svelte/transition'
	import IconMenu from '~icons/eva/menu-fill'
	import IconClose from '~icons/eva/close-fill'
	import IconDown from '~icons/akar-icons/circle-chevron-down'

	let visible = false
	let visibleDropdown = false
	let search = ''
	let displayName = ''
	let hover = false

	const toggleDropdown = () => {
		visibleDropdown = !visibleDropdown
	}
	const toggleSideNav = () => {
		visible = !visible
	}
</script>

{#if visible}
	<div
		class="fixed left-0 h-[100%] w-[300px] z-2 bg-primary top-0"
		transition:fly={{ x: -300, opacity: 0.5 }}
	>
		<div class="flex justify-end items-center">
			<span
				class="h-12 p-4 cursor-pointer text-default duration-200 text-[2.75rem] transform select-none hover:text-white"
				on:click={toggleSideNav}><IconClose /></span
			>
		</div>
		<p>burning it up</p>
		<p>2 to the 1</p>
		<p>how can you kill a god</p>
		<p>dejvid stapit</p>
	</div>
{/if}

<nav
	class="flex flex-row fixed justify-between align-middle top-0 w-full pt-4 px-2"
>
	<div class="flex flex-row justify-between gap-6">
		<span
			class="h-12 cursor-pointer transform hover:text-primary2 duration-200 text-[2.75rem]"
			on:click={toggleSideNav}><IconMenu /></span
		>
		<Logo />
	</div>
	<input
		type="text"
		placeholder="search"
		class="rounded-2xl border-2 border-transparent px-[0.4rem] text-xl outline-none
    bg-gray-50 ease-in-out duration-300 flex-grow max-w-[30%] searchInput"
		bind:value={search}
	/>
	<div class="flex flex-row items-center justify-between gap-6 pr-4">
		{#if displayName}
			<Button text="POST" href="/editor" />
			<div class="relative">
				<div
					class="text-xl transition duration-200 flex flex-row items-center gap-2 select-none cursor-pointer"
					on:click={toggleDropdown}
				>
					<div>{displayName}</div>
					<IconDown />
				</div>
				{#if visibleDropdown}
					<div
						class="absolute flex flex-col border-1 rounded-lg p-2 gap-1 top-15 right-0"
						transition:fly={{ y: -50 }}
					>
						<a class="text-xl" href="/profile">profile</a>
						<span class="text-xl">logout</span>
					</div>
				{/if}
			</div>
			<a href="/profile">
				<img
					class="rounded-[50%] h-15 top-2 right-2"
					src={avatarSrc}
					alt="avatar"
				/>
			</a>
		{:else}
			<Button text="Log in" href="/login" />
			<Button text="Sign up" href="/signup" />
		{/if}
	</div>
</nav>

<style>
	.searchInput:hover,
	.searchInput:focus {
		@apply border-primary;
	}
</style>
