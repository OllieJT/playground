<script lang="ts">
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';

	export let open: boolean;
	export let href: string | undefined = undefined;
	const dispatch = createEventDispatcher<{ click: never; keydown: never }>();
	const { class: ClassName, ...rest } = $$restProps;
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	on:keydown={() => dispatch('keydown')}
	on:click={() => dispatch('click')}
	class={clsx(
		'pointer-events-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border-2  border-indigo-50 text-indigo-800 shadow-indigo-100 transition-all duration-300 ease-smooth hover:border-indigo-200',
		open ? 'scale-110 shadow-xl' : 'shadow-lg',
		ClassName
	)}
	{...rest}
>
	<slot />
</svelte:element>
