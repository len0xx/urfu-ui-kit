<script lang="ts">
	export let id: string = undefined
	export let node: HTMLElement = undefined
	export let underline = true
	export let className = ''
</script>

<div
	{id}
	bind:this={ node }
	class={ ['kit-table-row', className].filter(Boolean).join(' ') }
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
{ #if underline }
	<hr />
{ /if }

<style>
	:global(.kit-table .kit-table-row) {
		display: grid;
		position: relative;
		gap: 1em;
		grid-template-columns: var(--table-columns);
	}

	hr {
		height: 1px;
		margin-top: 0.5em;
		margin-bottom: 0;
		border: 0;
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
