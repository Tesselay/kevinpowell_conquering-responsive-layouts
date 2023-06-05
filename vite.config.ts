import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
	],
	css: {
		preprocessorOptions: {	
			sass: {
				additionalData: `
					@import '$lib/styles/vendors/_vendor-dir'
					@import '$lib/styles/abstracts/_abstracts-dir'
				`,
			}
		}
	}
});
