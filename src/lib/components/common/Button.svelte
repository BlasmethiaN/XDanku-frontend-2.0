<script lang="ts">
	export let text: string
	export let href: string
</script>

<a {href} class="select-none"
	><button
		class="text-xl p-2 rounded-2xl border-2 duration-200 cursor-pointer transform bg-secondary hover:(rounded-xl bg-primary)"
		>{text}</button
	></a
>
