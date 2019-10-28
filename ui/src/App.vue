<template>
	<div id="app">
		<div class="banner">
			<p>
				<span role="img" aria-label="Information Desk Woman">💁‍♀️</span> Tournant
				UI is still in early development. Use with care and help out if you can.
			</p>
		</div>
		<h1 class="main-headline">
			<span style="font-weight: 300">tournant</span
			><span class="sr-only"> </span>ui
		</h1>
		<section class="intro">
			<p>
				In the kitchen, the <em>tournant</em> is the person moving around,
				helping out.
			</p>
			<p>
				Tournant UI aims to be this. For User Interfaces. Tournant UI will not
				replace your complete UI or dictate how to you design your elements.
			</p>
			<p>
				But if you need to integrate inclusive components in your site, Tournant
				UI will be there. Like a helping hand.
			</p>
		</section>
		<section class="components">
			<h2 class="small-headline">Components</h2>
			<ul class="component-list">
				<li
					v-for="component in components"
					:key="component.name"
					class="component-card"
				>
					<article>
						<h3 class="component-card__title">
							<span style="font-weight:300">@tournant/</span
							>{{ component.name }}
						</h3>
						<p>{{ component.description }}</p>
						<a :href="component.link" class="component-card__link"
							><span class="sr-only">{{ component.name }}</span> package link</a
						>
					</article>
				</li>
			</ul>
		</section>
		<footer class="links">
			<a href="https://github.com/tournantdev/ui" class="icon-link">
				<svg
					id="Layer_1"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 62.6 61.06"
				>
					<title>GitHub</title>
					<path
						class="cls-1"
						d="M31.3,0a31.31,31.31,0,0,0-9.89,61c1.56.28,2.13-.68,2.13-1.51s0-2.72,0-5.33C14.79,56.06,13,50,13,50c-1.43-3.62-3.48-4.58-3.48-4.58-2.84-1.94.22-1.91.22-1.91,3.14.23,4.79,3.23,4.79,3.23,2.79,4.78,7.33,3.4,9.11,2.6a6.68,6.68,0,0,1,2-4.18c-6.95-.79-14.26-3.48-14.26-15.47a12.09,12.09,0,0,1,3.22-8.4A11.31,11.31,0,0,1,14.86,13s2.63-.84,8.61,3.21a29.76,29.76,0,0,1,15.67,0c6-4.05,8.6-3.21,8.6-3.21a11.26,11.26,0,0,1,.31,8.29,12,12,0,0,1,3.22,8.4c0,12-7.32,14.67-14.29,15.44,1.12,1,2.12,2.88,2.12,5.8,0,4.18,0,7.56,0,8.59,0,.83.57,1.81,2.16,1.5A31.31,31.31,0,0,0,31.3,0Z"
					/></svg
			></a>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			currentDemo: null,
			password: '',
			components: [
				{
					name: 'combobox',
					description: 'List autocomplete with manual selection',
					link: 'https://www.npmjs.com/package/@tournant/combobox'
				},
				{
					name: 'dropdown',
					description: 'A flexible, accessible dropdown menu.',
					link: 'https://www.npmjs.com/package/@tournant/dropdown'
				},
				{
					name: 'input',
					description: 'A component for text-like inputs.',
					link: 'https://www.npmjs.com/package/@tournant/input'
				}
			]
		}
	}
}
</script>

<style lang="scss">
@import './styles/main';

*,
*::before,
*::after {
	box-sizing: border-box;
}

:root {
	--tournant-color-dark: #007a7c;
	--tournant-color-light: #f0f7ed;
}

html {
	font-family: 'Fabrikat', sans-serif;
	font-size: 100%;

	@media (min-width: 600px) {
		font-size: 105%;
	}

	@media (min-width: 900px) {
		font-size: 111%;
	}
}

body {
	background-color: var(--tournant-color-light);
	color: var(--tournant-color-dark);
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	min-height: 100vh;
	padding: 5vmin;
	max-width: 1000px;
	margin-left: 5vmin;
}

a {
	color: black;

	&:focus {
		outline: 2px solid var(--tournant-color-dark);
	}
}

.banner {
	background-color: #fff;
	border: 2px solid var(--tournant-color-dark);
	border-radius: 0.25em;
	padding: 0.75rem 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100ch;
	margin: 0 auto;

	p {
		margin: 0;
	}
}

.component-list {
	display: flex;
	flex-flow: row wrap;
	list-style: none;
	padding-left: 0;

	@supports (display: grid) {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		grid-gap: 4vmin;

		& > * {
			margin: 0 !important;
		}
	}

	& > *:not(:last-child) {
		margin-right: 0.5rem;
	}
}

.intro {
	max-width: 50ch;
}

.component-card {
	background-color: #f2f2f2;
	background-image: linear-gradient(
		176deg,
		rgba(240, 247, 237, 1) 0%,
		rgba(240, 247, 237, 1) 35%,
		rgba(242, 242, 242, 1) 35%,
		rgba(242, 242, 242, 1) 100%
	);
	box-shadow: -2px -3px 0 1px white;
	flex: 0 0 20rem;
	margin-bottom: 1rem;
	overflow: hidden;
	padding: 2vmin;
	position: relative;
}
section {
	margin-bottom: 2rem;
}

.icon-link {
	display: block;
	max-width: 2rem;

	& svg {
		fill: currentColor;
		width: 100%;
	}
}

*:first-child {
	margin-top: 0;
}

*:last-child {
	margin-bottom: 0;
}
</style>
