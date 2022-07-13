import Icons from 'unplugin-icons/vite'
import WindiCSS from 'vite-plugin-windicss'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		WindiCSS(),
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	]
}

export default config
