<script lang="ts">
    import { Divider, Text } from '$lib/components'

    const sizes = ['S', 'M', 'L'] as const
    const sizeNames = ['small', 'medium', 'large'] as const
    const heights = [6, 8, 10] as const
    const margins = [0.5, 0.6, 0.7] as const
    type Size = typeof sizes[number]

    export let num = '0'
    export let size: Size = 'M'
    export let caption = ''
    export let className = ''

    let sizeClass = 'size-' + sizeNames[sizes.indexOf(size)]
    let dividerSize = heights[sizes.indexOf(size)]
    let margin = margins[sizes.indexOf(size)]
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
    class="kit-benefit {className} {sizeClass}"
    on:click
    on:mousedown
    on:mouseup
    on:mouseover
    on:mouseleave
>
    <Text className="kit-benefit-num blue-text semi-bold" marginY={0}>{ num }</Text>
    <Divider width="100%" color="var(--blue)" height={ dividerSize } marginY={ margin } />
    <Text className="kit-benefit-caption" marginTop={0.9}>{ caption }</Text>
</div>

<style>
    :global(.kit-benefit > .kit-benefit-num) {
        line-height: 1.2;
    }
    :global(.kit-benefit.size-small > .kit-benefit-num) {
        font-size: 2em;
    }
    :global(.kit-benefit.size-medium > .kit-benefit-num) {
        font-size: 2.5em;
    }
    :global(.kit-benefit.size-large > .kit-benefit-num) {
        font-size: 3em;
    }
    :global(.kit-benefit.size-small > .kit-benefit-caption) {
        font-size: 0.9em;
    }
    :global(.kit-benefit.size-medium > .kit-benefit-caption) {
        font-size: 1em;
    }
    :global(.kit-benefit.size-large > .kit-benefit-caption) {
        font-size: 1.1em;
    }
</style>
