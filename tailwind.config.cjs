const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const font = {
	monocraft: ['Monocraft', 'Space Mono', ...defaultTheme.fontFamily.mono],
	space_mono: ['Space Mono', ...defaultTheme.fontFamily.mono],

	spline: ['Spline SansVariable', 'Spline Sans', 'Spline'],
	viga: ['Viga', 'Inter', ...defaultTheme.fontFamily.sans],
	inter: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
	Mona: ['Mona Sans', 'serif'],
	Hubot: ['Hubot Sans', 'serif']
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,md,mdx,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				mono: colors.neutral
			},
			transitionTimingFunction: {
				smooth: 'cubic-bezier(0, 0, 0, 1.5)',
				whip: `cubic-bezier(0.8, 0.3, 0.15, 1.1)`
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwind-scrollbar'),
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']);
			addVariant('active', ['&.active']);
		})
	]
};
