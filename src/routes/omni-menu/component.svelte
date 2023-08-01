<script lang="ts">
	import type { SvelteIcon } from '@inqling/svelte-icons';
	import { Squares2x2 } from '@inqling/svelte-icons/heroicon-24-solid';
	import clsx from 'clsx';
	import Button from './button.svelte';

	type MenuItem = {
		label: string;
		icon: SvelteIcon;
		href: string;
	};

	export let menu_items: MenuItem[];

	let open = false;
	const toggle_open = () => (open = !open);
</script>

<div class="relative">
	<Button on:click={toggle_open} {open}>
		<Squares2x2 class="h-6 w-6" />
	</Button>

	<ul class="pointer-events-none">
		{#each menu_items as { label, href, icon }, ix}
			{@const rotation = (360 / menu_items.length) * ix}
			<li
				class={clsx(
					'absolute -inset-16 flex items-start justify-center transition-transform ease-whip'
				)}
				style="transform: rotate({open ? rotation : rotation - 45}deg) scale({open ? 1 : 0})"
			>
				<Button {open} {href} style="transform:rotate(-{rotation}deg)">
					<span class="sr-only">{label}</span>
					<svelte:component this={icon} class="h-6 w-6 fill-indigo-800 text-indigo-800" />
				</Button>
			</li>
		{/each}
	</ul>
</div>
