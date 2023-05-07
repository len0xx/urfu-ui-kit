<script lang="ts">
	export let head = false
	export let className = ''
</script>

<div class={ ['kit-table-cell', head ? 'highlight-bottom' : '', className].filter(Boolean).join(' ') }>
	<slot />
</div>

<style>
	:global(.kit-table .kit-table-row .kit-table-cell) {
		padding: 1em 0;
	}

	:global(.kit-table .kit-table-row .kit-table-cell.highlight-bottom) {
		font-weight: 600;
		color: var(--blue);
		border-bottom: 2px solid var(--blue);
	}
</style>
