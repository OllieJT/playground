<script lang="ts">
	import { Clipboard } from '@inqling/svelte-icons/heroicon-24-solid';
	import { Discord, Mastodon, Reddit, Twitter } from '@inqling/svelte-icons/simple-icons';
	import Component from './component.svelte';
</script>

<div class="flex h-full min-h-screen w-full items-center justify-center gap-10">
	<Component
		menu_items={[
			{
				label: 'Mastodon',
				icon: Mastodon,
				href: '#'
			},
			{
				label: 'Twitter',
				icon: Twitter,
				href: '#'
			},
			{
				label: 'Discord',
				icon: Discord,
				href: '#'
			},
			{
				label: 'Reddit',
				icon: Reddit,
				href: '#'
			},
			{
				label: 'Copy',
				icon: Clipboard,
				href: '#'
			}
		]}
	/>
</div>
