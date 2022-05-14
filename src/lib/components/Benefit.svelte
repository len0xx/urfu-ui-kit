<script lang="ts">
    import Divider from './Divider.svelte'
    import Heading from './Heading.svelte'

    export let num = '0'
    export let caption = ''
    export let className = ''
</script>

<div class="kit-benefit {className}" on:click>
    <Heading size={3} className="blue-text">{ num }</Heading>
    <Divider width="100%" color="var(--blue)" height={ 8 } />
    { caption }
</div>

<style>
    :global(.kit-benefit > h3) {
        margin: 0.25em 0;
        font-size: 2.5em;
    }
</style>
