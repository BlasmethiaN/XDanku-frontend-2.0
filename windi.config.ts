import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#EF476F',
				primary2: '#EB194A',
				secondary: '#FFD166',
				secondary2: '#FFC233',
				default: '#1A3A56',
				default2: '#26547C'
			}
		}
	}
})
