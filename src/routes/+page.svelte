<script lang="ts">
	import { base } from '$app/paths';

	type Project = { path: string; label: string };
	const projects: Project[] = [{ label: 'Omni Menu', path: 'omni-menu' }];
</script>

<ol>
	{#each projects as { path, label }}
		<li>
			<a href="{base}/{path}">{label}</a>
		</li>
	{/each}
</ol>
