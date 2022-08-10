export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'pokedex',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com',
				crossorigin: ''
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Open+Sans&display=swap'
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/variables.scss', '@/assets/reset.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ['@/plugins/axios-accessor'],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [
		{
			path: '@/components',
			pathPrefix: false
		}
	],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxtjs/axios'],

	axios: {
		baseURL: 'https://pokeapi.co/api/v2'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extractCSS: true
	}
};
