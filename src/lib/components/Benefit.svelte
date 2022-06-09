<script lang="ts">
    import { Divider, Heading } from '$lib/components'

    export let num = '0'
    export let caption = ''
    export let className = ''
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    class="kit-benefit {className}"
    on:click
    on:mousedown
    on:mouseup
    on:mouseover
    on:mouseleave
>
    <Heading size={3} className="blue-text" marginY={ 0.25 }>{ num }</Heading>
    <Divider width="100%" color="var(--blue)" height={ 8 } marginY={ 1 } />
    { caption }
</div>

<style>
    :global(.kit-benefit > h3) {
        margin: 0.25em 0;
        font-size: 2.5em;
    }
</style>
