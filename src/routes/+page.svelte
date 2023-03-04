<script lang="ts">
	import { base } from '$app/paths';

	type Project = { path: string; label: string };
	const projects: Project[] = [];
</script>

<ol>
	{#each projects as { path, label }}
		<li>
			<a href="{base}/{path}">{label}</a>
		</li>
	{/each}
</ol>
