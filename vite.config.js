import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()]
	,vite:{
		server:{
			hmr:{
				clientPort: process.env.HMR_HOST ? 443 : 5143,
				host:process.env.HMR_HOST ? process.env.HMR_HOST.substring("HTTPS://".length) : "localhost"
			}
		}
	}
};

export default config;
