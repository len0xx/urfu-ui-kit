<script lang="ts">
	export let id: string = undefined
	export let node: HTMLElement = undefined
	export let className = ''
	export let columns: number
</script>

<div
	{id}
	bind:this={ node }
	class={ ['kit-table', className].filter(Boolean).join(' ') }
	style:--table-columns={ `repeat(${ columns }, 1fr)` }
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

