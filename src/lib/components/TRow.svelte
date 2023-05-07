<script lang="ts">
	export let underline = true
</script>

<div class="kit-table-row">
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

	:global(.kit-table hr) {
		height: 1px;
		margin-top: 0.5em;
		margin-bottom: 0;
		border: 0;
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
