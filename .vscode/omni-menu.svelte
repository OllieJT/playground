<script lang="ts">
	import type { SvelteIcon } from '@inqling/svelte-icons';
	import { Squares2x2 as MenuClosed } from '@inqling/svelte-icons/heroicon-24-outline';
	import { Squares2x2 as MenuOpen } from '@inqling/svelte-icons/heroicon-24-solid';
	import { clsx } from 'clsx';

	export let open: boolean;
	const toggle_open = () => (open = !open);

	let size = 20;
	const offset = size / 3;

	type Item = {
		icon: SvelteIcon;
		label: string;
		href: string;
	};

	export let items: Item[];
	const rotation_offset = 360 / items.length;
</script>

<style>
</style>

<div class={clsx('relative', open ? 'z-50' : 'z-0')}>
	<!-- Central Button -->
	<button
		on:click={toggle_open}
		class={clsx(
			'relative z-50 h-12 w-12 border border-mono-100 bg-white transition-transform duration-300 ease-smooth',
			open
				? 'scale-125 rounded-full shadow-xl shadow-mono-300'
				: 'rounded-xl shadow-lg shadow-mono-100'
		)}
	>
		{#if open}
			<MenuOpen class="h-6 w-6" />
		{:else}
			<MenuClosed class="h-6 w-6" />
		{/if}
	</button>

	<!-- Radial Actions -->
	<ul>
		{#each items as item, ix}
			{@const rotation = ix * rotation_offset}
			{@const rotation_resting = rotation - 45}
			<li
				class="pointer-events-none absolute text-center transition-transform duration-300 ease-whip"
				style="
						transform: rotate({open ? rotation : rotation_resting}deg) scale({open ? 1 : 0});
						transition-delay: {open ? ix * 50 : 0}ms;
						inset: -{offset}rem
					"
			>
				<a
					href={item.href}
					target="_blank"
					rel="noopener noreferrer"
					class={clsx(
						'group pointer-events-auto relative z-50 inline-flex h-20 w-20 items-center justify-center border border-mono-100 bg-white shadow-lg shadow-mono-100 transition-all',
						open ? 'rounded-full' : 'rounded-xl'
					)}
					style="transform: rotate(-{rotation}deg)"
				>
					<div
						class="flex h-10 w-auto translate-y-2 flex-col items-center justify-center transition-transform duration-300 ease-smooth group-hover:translate-y-0"
					>
						<svelte:component this={item.icon} class="h-6 w-6" />
						<span
							class="block h-4 w-max pt-1 text-xs font-medium uppercase leading-none tracking-wide opacity-0 transition-transform duration-300 ease-smooth group-hover:opacity-100"
						>
							{item.label}
						</span>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
