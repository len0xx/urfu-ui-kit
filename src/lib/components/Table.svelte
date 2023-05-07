<script lang="ts">
	export let className = ''
	export let columns: number
</script>

<div class={ ['kit-table', className].filter(Boolean).join(' ') } style:--table-columns={ `repeat(${ columns }, 1fr)` }>
	<slot />
</div>

