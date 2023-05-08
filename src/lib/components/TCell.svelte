<script lang="ts">
	export let id: string = undefined
	export let node: HTMLElement = undefined
	export let head = false
	export let className = ''
</script>

<div
	{id}
	bind:this={ node }
	class={ ['kit-table-cell', head ? 'highlight-bottom' : '', className].filter(Boolean).join(' ') }
	on:click
	on:mouseover
	on:mouseleave
	on:mouseup
	on:mousedown
	on:focus
	on:blur
>
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
