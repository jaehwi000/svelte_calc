import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite:{
			server:{
				hmr:{
					clientPort: process.env.HMR_HOST ? 443 : 5143,
					host:process.env.HMR_HOST ? process.env.HMR_HOST.substring("HTTPS://".length) : "localhost"
				}
			}
		}
	}
};

export default config;
